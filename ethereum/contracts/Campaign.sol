pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    struct CampaignProp {
        string Name;
        address CAddress;
        string Desc;
        string Image;
    }

    CampaignProp[] public props;



    function createCampaign(uint minimum, string desc, string name, uint goal, string image) public {
        address newCampaign = new Campaign(minimum, msg.sender, desc, name, goal, image);
        CampaignProp memory newCampaignProp = CampaignProp({
        Name: name,
        CAddress: newCampaign,
        Desc: desc,
        Image: image
        });

        props.push(newCampaignProp);

        deployedCampaigns.push(newCampaign);

    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    string public desciption;
    string public CampaignName;
    string public imageURL;
    uint public CampGoal;


    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator, string desc, string name, uint goal, string image) public {
        manager = creator;
        minimumContribution = minimum;
        desciption = desc;
        CampaignName = name;
        CampGoal = goal;
        imageURL = image;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        require(msg.sender != manager);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
        description: description,
        value: value,
        recipient: recipient,
        complete: false,
        approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address, string, string, uint, string
    ) {
        return (
        minimumContribution,
        this.balance,
        requests.length,
        approversCount,
        manager,
        desciption,
        CampaignName,
        CampGoal,
        imageURL
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }


}