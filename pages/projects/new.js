import React, {useState} from "react";
import { Form, Button, Input, Message, Header } from "semantic-ui-react";
import Layout from "../../components/Layout/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import {useRouter} from "next/router";


const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [campaignDesc, setCampaignDesc] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [goal, setGoal] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError('')

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign( web3.utils.toWei(minimumContribution), campaignDesc, campaignName, web3.utils.toWei(goal), imageUrl)
        .send({
          from: accounts[0],
        });

      Router.push('/');

    } catch (err) {
      setError(err)
    }

    setIsLoading(false);
  };

  return (
      <Layout>
        <Header as="h1" textAlign="center" style={{fontSize:"40px",marginTop: "20px", marginBottom: "30px", fontFamily: "'Kumbh Sans', sans-serif", color: "#9FDED6"}} >Create Project</Header>
        <Form inverted onSubmit={onSubmit} error={!!error}>
          <Form.Field>
            <label style={{marginBottom:"5px"}}>Project Name</label>
            <Input
                style={{marginBottom:"15px"}}
              value={campaignName}
              onChange={(event) =>
                setCampaignName(event.target.value)
              }
            />

            <label style={{marginBottom:"5px"}}>Project Description</label>
            <Input
                style={{marginBottom:"15px"}}
                value={campaignDesc}
                onChange={(event) =>
                    setCampaignDesc(event.target.value)
                }
            />

            <label style={{marginBottom:"5px"}}>Image of Project</label>
            <Input
                style={{marginBottom:"15px"}}
                value={imageUrl}
                onChange={(event) =>
                    setImageUrl(event.target.value)
                }
            />

            <label style={{marginBottom:"5px"}}>Minimum Contribution</label>
            <Input
                style={{marginBottom:"15px"}}
                label="ETH"
                labelPosition="right"
                value={minimumContribution}
                onChange={(event) =>
                    setMinimumContribution(event.target.value)
                }
            />

            <label style={{marginBottom:"5px"}}>Goal</label>
            <Input
                style={{marginBottom:"15px"}}
                label="ETH"
                labelPosition="right"
                value={goal}
                onChange={(event) =>
                    setGoal(event.target.value)
                }
            />

          </Form.Field>
          <Message error header="Oops!" content={error} />
          <Button loading={isLoading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
}

export default CampaignNew;
