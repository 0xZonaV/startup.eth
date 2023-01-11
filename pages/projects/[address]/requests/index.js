import React, {Fragment} from "react";
import { Button, Table } from "semantic-ui-react";
import Link from "next/link";
import Layout from "../../../../components/Layout/Layout";
import Campaign from "../../../../ethereum/campaign";
import RequestRow from "../../../../components/requestRow/requestRow";

const RequestIndex = ({address, requests, requestCount, approversCount}) => {
    const renderRows = () => {
        return requests.map((request, index) => {
            return (
                <RequestRow
                    key={index}
                    id={index}
                    request={request}
                    address={address}
                    approversCount={approversCount}
                />
            );
        });
    }

    const { Header, Row, HeaderCell, Body } = Table;

        return(
            <Fragment>
            <Layout>
                <h3>Requests</h3>
                <Link href={`/projects/${address}/requests/new`}>
                        <Button primary floated="right" style={{ marginBottom: 10 }}>
                            Add Request
                        </Button>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>{renderRows()}</Body>
                </Table>
                <div>Found {requestCount} requests.</div>
            </Layout>
            </Fragment>
        );
}

RequestIndex.getInitialProps = async (props) => {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    const requests = await Promise.all(
        Array(parseInt(requestCount))
            .fill()
            .map((element, index) => {
                return campaign.methods.requests(index).call();
            })
    );

    return { address, requests, requestCount, approversCount };
}

export default RequestIndex;
