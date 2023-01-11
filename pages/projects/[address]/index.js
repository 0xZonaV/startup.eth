import React from "react";
import Layout from "../../../components/Layout/Layout";
import Campaign from "../../../ethereum/campaign";
import {Card, Grid, Button, Image, Header} from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
import ContributeForm from "../../../components/contributeForm/contributeForm";
import Link from "next/link";

const CampaignShow = ({
    address,
    minimumContribution,
    balance,
    requestCounts,
    approversCount,
    manager,
    CampaignDesciption,
    CampaignName,
    CampGoal,
    imageURL
}) => {

    const renderCards1 = () => {

        const items1 = [
            {
                header: requestCounts,
                meta: 'Count of requests',
                description: 'A request tries to withdraw money from the contract',
            },
        ];

        return <Card.Group items={items1}/>;
    }

    const renderCards2 = () => {

        const items1 = [

            {
                header: web3.utils.fromWei(minimumContribution),
                meta: 'Minimum contribution (ETH)',
                description: 'You must contribute at least this much ETH to become an approver'
            },

        ];

        return <Card.Group items={items1}/>;
    }

    const renderCards3 = () => {

        const items1 = [

            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: "Project balance (ETH)",
                description: "Project balance is how much money this project has left to spend"
            },

        ];

        return <Card.Group items={items1}/>;
    }


    const renderCards4 =() => {

        const items2 = [
            {
                header: "Manager wallet",
                meta: "Click to view wallet on etherscan.io",
                href: `https://goerli.etherscan.io/address/${manager}`,
                description: 'The manager created this project and create requests to withdraw money',
                style: {overflowWrap:'break-word', color: "rgba(167, 171, 235, 1)"},
            },
        ];

        return <Card.Group items={items2}/>;
    }

    const renderCards5 = () => {

        const items2 = [
            {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Number of people who already donate to this project'
            }
        ];

        return <Card.Group items={items2}/>;
    }

    const renderCards6 = () => {

        const items2 = [
            {
                header: "Contract wallet",
                meta: "Click to view contract on etherscan.io",
                href: `https://goerli.etherscan.io/address/${address}`,
                description: 'Only this contract can use money of project',
                style: {overflowWrap:'break-word'}
            },
        ];

        return <Card.Group items={items2}/>;
    }
    return(
        <Layout>
            <Grid style={{marginTop:"15px"}}>
                <Grid.Row >
                    <Grid.Column width={6}>
                        <Image src={imageURL} size='big' alt={CampaignName} />
                    </Grid.Column>

                    <Grid.Column width={10}>
                        <Header as="h2" inverted style={{marginBottom: "0px", color:"rgba(159, 222, 214, 1)"}}>
                            {CampaignName}
                        </Header>
                        <Header.Subheader style={{marginBottom: "0px"}}>{CampaignDesciption}</Header.Subheader>

                        <Header as="h2" color="green" style={{marginBottom: "0px", marginTop: "5px"}} >
                            {web3.utils.fromWei(balance)}
                        </Header>

                        <Header.Subheader style={{marginTop: "2px", marginBottom: "20px"}} >
                            pledged of {web3.utils.fromWei(CampGoal)} ETH goal
                        </Header.Subheader>

                        <ContributeForm address={address}/>

                    </Grid.Column>

                </Grid.Row>

                </Grid>

            <Grid columns={3}>

                <Grid.Row >
                    <Grid.Column width={5}>
                        {renderCards1()}
                    </Grid.Column>
                    <Grid.Column width={5}>
                        {renderCards2()}
                    </Grid.Column>

                    <Grid.Column width={5}>
                        {renderCards3()}
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={5}>
                        {renderCards4()}
                    </Grid.Column>
                    <Grid.Column width={5}>
                        {renderCards5()}
                    </Grid.Column>
                    <Grid.Column width={5}>
                        {renderCards6()}
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row>
                    <Grid.Column>
                    <Link href={`/projects/${address}/requests`}>
                            <Button primary>View Requests</Button>
                    </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
        )
}

CampaignShow.getInitialProps = async ({query}) => {
    const {address} = query;
    const campaign = Campaign(address);
    const summary = await campaign.methods.getSummary().call();

    return {
        address: address,
        minimumContribution: summary[0],
        balance: summary[1],
        requestCounts: summary[2],
        approversCount: summary[3],
        manager: summary[4],
        CampaignDesciption: summary[5],
        CampaignName: summary[6],
        CampGoal: summary[7],
        imageURL: summary[8]
    }
}

export default CampaignShow;