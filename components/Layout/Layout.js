import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
  return (
    <div>
        <Container  style={{fontFamily: "'Kumbh Sans', sans-serif", color: "rgba(167, 171, 235, 1)"}}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          ></link>
        </Head>
        <Header />
        {children}
        <Footer />
        </Container>
    </div>

  );
};
export default Layout;
