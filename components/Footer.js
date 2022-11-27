import React from "react";
import {Menu, Header, Container, Grid, Segment, List, Button, Icon} from "semantic-ui-react";
import {Link} from '../routes';


const Footer = () => {
    return (
        <Segment vertical style={{padding: '5em 0em', borderRadius: "1.5%" , background: "rgba(63, 65, 88, 0.9)", marginTop: "130px", boxShadow: "0px 5px 5px 5px rgba(0, 0, 0, 0.25)"}}>
            <Grid divided inverted centered stackable>
                <Grid.Row>
                    <Grid.Column width={3} >
                        <Header inverted as='h4' content='Sitemap'/>
                        <List link inverted>
                            <List.Item   style={{color: "rgba(158, 195, 222, 1)"}} ><Link route="/"><a>Home Page</a></Link></List.Item>
                            <List.Item   style={{color: "rgba(158, 195, 222, 1)"}}><Link route="/projects/new"><a>Create New Campaign</a></Link></List.Item>
                            <List.Item   style={{color: "rgba(158, 195, 222, 1)"}}><Link route="/"><a>FAQ</a></Link></List.Item>
                            <List.Item   style={{color: "rgba(158, 195, 222, 1)"}}><Link route="/"><a>Contact Us</a></Link></List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Manager Socials'/>
                        <List link inverted>
                            <Button color='vk' href="https://vk.com/turtle_tony" style={{marginBottom: "10px"}}>
                                <Icon name='vk' /> VK
                            </Button>
                            <Button color='mail' style={{marginBottom: "10px", content: "", display: "block"}}>
                                <Icon name='mail' /> Mail
                            </Button>
                            <Button color='blue' style={{marginBottom: "10px"}}>
                                <Icon name='telegram' /> Telegram
                            </Button>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Developer Socials'/>
                        <List link inverted>
                            <Button color='vk' href="https://vk.com/zonav_official" style={{marginBottom: "10px"}}>
                                <Icon name='vk' /> VK
                            </Button>
                            <Button color='linkedin' href="https://www.linkedin.com/in/aleksandrtitov/" style={{marginBottom: "10px"}}>
                                <Icon name='linkedin' /> LinkedIn
                            </Button>
                            <Button color='black' href="https://github.com/Z0naV" style={{marginBottom: "10px"}}>
                                <Icon name='github' /> GitHub
                            </Button>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Header inverted as='h4' content='Designer Socials'/>
                    <List link inverted>
                        <Button color='vk' href="https://vk.com/revoltlex" style={{marginBottom: "10px"}}>
                            <Icon name='vk' /> VK
                        </Button>
                        <Button color='mail' style={{marginBottom: "10px", content: "", display: "block"}}>
                            <Icon name='mail' /> Mail
                        </Button>
                        <Button color='blue' style={{marginBottom: "10px"}}>
                            <Icon name='telegram' /> Telegram
                        </Button>
                    </List>
                </Grid.Column>
                </Grid.Row>
            </Grid>
    </Segment>
    );
};

export default Footer;