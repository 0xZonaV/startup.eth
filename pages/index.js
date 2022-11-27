import React, { Component } from "react";
import {Card, Button, Container, Image, Item, Header, Label, HeaderSubheader} from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";








class CampaignIndex extends Component {
  static async getInitialProps() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();

      const AllProps = (await Promise.all(
          Array(parseInt(campaigns.length)).fill().map((element, index) => {
              return factory.methods.props(index).call()
          })
      )).reverse();

      return { AllProps, campaigns }

  };

    renderSlider() {

         const props = this.props;

         const content = [
             {
                 title: props.AllProps[0].Name,
                 description: props.AllProps[0].Desc,
                 button: <Button style={{marginBottom:"10px"}} inverted color="violet" size="massive" primary href={`/projects/${props.AllProps[0].CAddress}`}>View More</Button>,
                 image: props.AllProps[0].Image,
             },
             {
                 title: props.AllProps[1].Name,
                 description: props.AllProps[1].Desc,
                 button: <Button style={{marginBottom:"10px"}} inverted color="violet" size="massive" primary href={`/projects/${props.AllProps[1].CAddress}`}>View More</Button>,
                 image: props.AllProps[1].Image,
             },
             {
                 title: props.AllProps[2].Name,
                 description: props.AllProps[2].Desc,
                 button: <Button style={{marginBottom:"10px"}} inverted color="violet" size="massive" primary href={`/projects/${props.AllProps[2].CAddress}`}>View More</Button>,
                 image: props.AllProps[2].Image,
             }
         ];

         return (
             <Slider className="slider-wrapper">
             {content.map((item, index) => (
                 <div
                     key={index}
                     className="slider-content"
                     style={{marginTop:"30px", background: `url('${item.image}') center center`,  borderRadius: "1.5%"}}
                 >
                     <div style={{backgroundColor: "rgba(0, 0, 0, 0.5 )"}} className="inner">
                         <h1 >{item.title}</h1>
                         <p style={{fontSize: "30px"}}>{item.description}</p>
                         {item.button}

                     </div>
                 </div>
             ))}
         </Slider>
         );



   }




  renderCards() {
      const items = this.props.AllProps.map((prop, index) => {
          return {
              className: "Item_Class",
              header: (<Header as="h2" style={{ color: "rgba(167, 171, 235, 1)", fontFamily: "'Kumbh Sans', sans-serif", marginTop: "8px", fontSize:"32px", marginBottom: "15px"}}>{prop.Name}</Header>),
              description: <div fluid style={{fontSize: "20px", color:"rgba(158, 195, 222, 1)"}}>{prop.Desc}</div>,
              image: (
                    <Image src={prop.Image} fluid="true" floated="left" size="medium" inline rounded/>
              ),
              href: `/projects/${prop.CAddress}`,
              fluid: true,
              style: { background: "rgba(58, 59, 81, 0.9)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", textAlign: "center"}
          };
      });



      return (<Item.Group items={items} />);
  }



  render() {
    return (
      <Layout>
          {this.renderSlider()}
        <div>
            <Header as="h1" textAlign="center" style={{fontSize:"50px",marginTop: "75px", marginBottom: "75px", fontFamily: "'Kumbh Sans', sans-serif", color: "#9FDED6"}} >Projects</Header>
          {this.renderCards()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
