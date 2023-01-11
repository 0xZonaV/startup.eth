import React from "react";
import {Image, Item} from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout/Layout";
import "react-animated-slider/build/horizontal.css";
import SliderComponent from "../components/slider/slider-content";
import {DescriptionDiv, StyledH1Tag, StyledHeaderMainPage} from "../styles/mainPage.style";

const CampaignIndex = ({ AllProps }) => {

 const renderCards = () => {

      const items = AllProps.map((prop, index) => {

          const {Name, Desc, CAddress} = prop;

          return {
              childKey: index,
              className: "Item_Class",
              header: (
                  <StyledHeaderMainPage as="h2">
                      {Name}
                  </StyledHeaderMainPage>
              ),
              description:
                  <DescriptionDiv fluid={"true"}>
                      {Desc}
                  </DescriptionDiv>,
              image: (
                    <Image  src={prop.Image}
                            fluid= "true"
                            floated="left"
                            size="medium"
                            inline
                            rounded
                            alt={Name}
                    />
              ),
              href: `/projects/${CAddress}`,
              fluid: "true",
              style: {background: "rgba(58, 59, 81, 0.9)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", textAlign: "center"}
          };
      });

      return (<Item.Group items={items} />);
  }

    return (
      <Layout>
          <SliderComponent AllProps={AllProps} />
        <div>
            <StyledH1Tag as="h1">Projects</StyledH1Tag>
            {renderCards()}
        </div>
      </Layout>
    );


}

CampaignIndex.getInitialProps = async () => {
    const {getDeployedCampaigns, props} = factory.methods;
    const campaigns = await getDeployedCampaigns().call();

    const AllProps = (await Promise.all(
        Array(parseInt(campaigns.length))
            .fill()
            .map((element, index) => {
            return props(index).call()
        })
    )).reverse();

    return { AllProps }
};

export default CampaignIndex;
