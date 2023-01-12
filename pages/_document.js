import Document, {Head, Main, NextScript, Html} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="../static/apple-touch-icon.png"></link>
                    <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png"></link>
                    <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                    <title>StartUp.eth</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <style jsx global>{`
                      #__next {
                        background: #2D2F40;
                      }
                    `}</style>
                </body>
            </Html>
        );
    }
}