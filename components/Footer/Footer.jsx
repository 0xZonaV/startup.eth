import React from "react";
import {Grid} from "semantic-ui-react";
import {StyledSegment} from "./Footer.style";
import FooterSitemap from "./Footer.sitemap";
import FooterSocials from "./Footer.Socials";


const Footer = () => {
    return (
        <StyledSegment vertical>
            <Grid
                divided
                inverted
                centered
                stackable
            >
                <Grid.Row>
                    <FooterSitemap />
                    <FooterSocials />
                </Grid.Row>
            </Grid>
    </StyledSegment>
    );
};

export default Footer;