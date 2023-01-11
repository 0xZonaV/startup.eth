import React from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import Campaign from "../../ethereum/campaign";

const RequestRow = ({address, id, request, approversCount}) => {

    const onApprove = async () => {
        const accounts = await web3.eth.getAccounts();

        const campaign = Campaign(address);
        await campaign.methods.approveRequest(id).send({
            from: accounts[0]
        });
    };

    const onFinalize = async () => {
        const accounts = await web3.eth.getAccounts();

        const campaign = Campaign(address);
        await campaign.methods.finalizeRequest(id).send({
            from: accounts[0]
        });

    };

    const { Row, Cell } = Table;

    const {complete, description, recipient, approvalCount, value} = request;

    const readyToFinalize = approvalCount > approversCount / 2;

    const notComplited = readyToFinalize && !complete;

    return(
        <Row disabled={complete} positive={notComplited}>
            <Cell>{id}</Cell>
            <Cell>{description}</Cell>
            <Cell>{web3.utils.fromWei(`${value}`)}</Cell>
            <Cell>{recipient}</Cell>
            <Cell>{approvalCount}/{approversCount}</Cell>
            <Cell>
                { complete ? null : (
                    <Button color="green" basic onClick={onApprove}>Approve</Button>
                )}
            </Cell>
            <Cell>
                { complete ? null : (
                    <Button color="teal" basic onClick={onFinalize}>Finalize</Button>
                )}
            </Cell>
        </Row>
    );
}

export default RequestRow;