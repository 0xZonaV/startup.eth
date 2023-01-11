import React, {useState} from "react";
import {Button, Form, Input, Message} from "semantic-ui-react";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import {useRouter} from "next/router";

const ContributeForm = (address) => {

    const Router = useRouter();

    const [labelValue, setLabelValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (event) => {
      event.preventDefault();

      const campaign = Campaign(address);

      setIsLoading(true);
      setError('');

      try {
       const accounts = await web3.eth.getAccounts();
       await campaign.methods.contribute().send({
           from: accounts[0],
           value: web3.utils.toWei(labelValue,'ether')
       });
       await Router.replaceRoute(`/projects/${address}`);
      } catch (err) {
            setError(err.message);
      }

      setLabelValue('');
      setIsLoading(false);
    };

    const onChangeHandler = (event) => {
        setLabelValue(event.target.value)
    }

    return(
        <Form inverted onSubmit={onSubmit} error={!!error}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input
                    value={labelValue}
                    onChange={onChangeHandler}
                    label="ETH"
                    labelPosition="right"
                    placeholder="Example: 0.01"
                />

                <Message error header="Oops!" content={error}/>

                <Button style={{marginTop:"10px"}} loading={isLoading} color={"purple"}>Contribute!</Button>
            </Form.Field>
        </Form>
    );
}

export default ContributeForm;