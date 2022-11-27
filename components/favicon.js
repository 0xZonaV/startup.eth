import React from "react";
import {Head} from "next/document";

const Favicon = () => {
    return (
        <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="public/favicon/apple-touch-icon.png"></link>
    <link rel="icon" type="image/png" sizes="32x32" href="public/favicon/favicon-32x32.png"></link>
    <link rel="icon" type="image/png" sizes="16x16" href="public/favicon/favicon-16x16.png"></link>
            <link rel="manifest" href="public/favicon/site.webmanifest"></link>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    <title>StartUp.eth</title>
        </Head>
    );
};

export default Favicon;
