import {Button, Grid, Header, Icon, List} from "semantic-ui-react";
import React, {Fragment} from "react";

const FooterSocials = () => {

    const person = [
        {
            header: "Manager Socials",
            vk: "https://vk.com/turtle_tony",
            linkedin: "",
            github: ""
        },
        {
            header: "Developer Socials",
            vk: "https://vk.com/zonav_official",
            linkedin: "https://www.linkedin.com/in/aleksandrtitov/",
            github: "https://github.com/0xZonaV"
        },
        {
            header: "Designer Socials",
            vk: "https://vk.com/revoltlex",
            linkedin: "",
            github: ""
        },
    ];



    return(
        <Fragment>
            {person.map((element) => {

                const {header, vk, linkedin, github} = element;

                return(
                    <Grid.Column width={3} key={vk}>
                        <Header inverted as='h4' content={header} />
                        <List link inverted>
                            <Button color='vk' href={vk} style={{marginBottom: "10px"}}>
                                <Icon name='vk' /> VK
                            </Button>
                            <Button color='linkedin' href={linkedin} style={{marginBottom: "10px"}}>
                                <Icon name='linkedin' /> LinkedIn
                            </Button>
                            <Button color='black' href={github} style={{marginBottom: "10px"}}>
                                <Icon name='github' /> GitHub
                            </Button>
                        </List>
                    </Grid.Column>
                )
            })}
        </Fragment>
    )
}

export default FooterSocials;