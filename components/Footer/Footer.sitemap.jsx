import {Grid, Header, List} from "semantic-ui-react";
import Link from "next/link";
import {Fragment} from "react";
const FooterSitemap = () => {

    return(
        <Fragment>
            <Grid.Column width={3}>
                <Header inverted as='h4' content='Sitemap'/>
                <List link inverted>
                    <List.Item><Link href="/"> Home Page </Link></List.Item>
                    <List.Item><Link href="/projects/new"> Create New Campaign </Link></List.Item>
                    <List.Item><Link href="/"> FAQ </Link></List.Item>
                    <List.Item><Link href="/"> Contact Us </Link></List.Item>
                </List>
            </Grid.Column>

        </Fragment>
    )
}

export default FooterSitemap