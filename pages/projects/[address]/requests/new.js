import React, {useState} from "react";
import { Form, Button, Message, Input, Header } from "semantic-ui-react";
import Layout from "../../../../components/Layout/Layout";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";
import Link from "next/link";
import {useRouter} from "next/router";

const RequestNew = () => {

    const [value, setValue] = useState('');
    const [recipient, setRecipient] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const Router = useRouter();

    const address = Router.query.address;

    const onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(address);

        setIsLoading(true)
        setError('');

        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient
                ).send({ from: accounts[0] });

            Router.push(`/projects/${address}/requests`)

        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false)
    };

    return (
        <Layout>
            <Link href={`/projects/${address}/requests`} style={{fontSize: "20px"}}>Back</Link>
            <Header as="h1" textAlign="center" style={{fontSize:"30px",marginTop: "10px", marginBottom: "20px", fontFamily: "'Kumbh Sans', sans-serif", color: "#9FDED6"}} >Create new Request</Header>
            <Form inverted onSubmit={onSubmit} error={!!error}>
                <Form.Field>
                    <label>Description</label>
                    <Input
                        value={ description }
                        onChange={event => setDescription(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Value in Ether</label>
                    <Input
                        label="ETH"
                        labelPosition="right"
                        value={ value }
                        onChange={event => setValue(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input
                        value={recipient }
                        onChange={ event => setRecipient(event.target.value)}
                    />
                </Form.Field>
                <Message error header="Oops!" content={error}/>
                <Button primary loading={isLoading}>Create!</Button>
            </Form>
            </Layout>
        )
}

export default RequestNew;