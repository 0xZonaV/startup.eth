import React, { Component } from "react";
import { Form, Button, Input, Message, Header } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from '../../routes';


class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    CampaignName: "",
    CampaignDesc: "",
    imageURL: "",
    goal: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign( web3.utils.toWei(this.state.minimumContribution), this.state.CampaignDesc, this.state.CampaignName, web3.utils.toWei(this.state.goal), this.state.imageURL)
        .send({
          from: accounts[0],
        });

      Router.pushRoute('/');

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Header as="h1" textAlign="center" style={{fontSize:"40px",marginTop: "20px", marginBottom: "30px", fontFamily: "'Kumbh Sans', sans-serif", color: "#9FDED6"}} >Create Project</Header>
        <Form inverted onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label style={{marginBottom:"5px"}}>Project Name</label>
            <Input
                style={{marginBottom:"15px"}}
              value={this.state.CampaignName}
              onChange={(event) =>
                this.setState({ CampaignName: event.target.value })
              }
            />

            <label style={{marginBottom:"5px"}}>Project Description</label>
            <Input
                style={{marginBottom:"15px"}}
                value={this.state.CampaignDesc}
                onChange={(event) =>
                    this.setState({ CampaignDesc: event.target.value })
                }
            />

            <label style={{marginBottom:"5px"}}>Image of Project</label>
            <Input
                style={{marginBottom:"15px"}}
                value={this.state.imageURL}
                onChange={(event) =>
                    this.setState({ imageURL: event.target.value })
                }
            />

            <label style={{marginBottom:"5px"}}>Minimum Contribution</label>
            <Input
                style={{marginBottom:"15px"}}
                label="ETH"
                labelPosition="right"
                value={this.state.minimumContribution}
                onChange={(event) =>
                    this.setState({ minimumContribution: event.target.value })
                }
            />

            <label style={{marginBottom:"5px"}}>Goal</label>
            <Input
                style={{marginBottom:"15px"}}
                label="ETH"
                labelPosition="right"
                value={this.state.goal}
                onChange={(event) =>
                    this.setState({ goal: event.target.value })
                }
            />

          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
