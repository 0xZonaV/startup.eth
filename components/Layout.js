import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
        <Container  style={{fontFamily: "'Kumbh Sans', sans-serif", color: "rgba(167, 171, 235, 1)"}}>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          ></link>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                        <link rel="manifest" href="/favicon/site.webmanifest" />

            <title>StartUp.eth</title>
        </Head>
        <Header />
        {props.children}
        <Footer />
        </Container>
    </div>

  );
};
export default Layout;
