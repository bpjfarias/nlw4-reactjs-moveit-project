import Document, { Html, Head, NextScript, Main } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://moveit-ruddy-mu.vercel.app/" />
                    <meta property="og:title" content="Home | move.it" />
                    <meta property="og:description" content="The Pomodoro technique plus gamification" />
                    <meta property="og:image" content="images/open_granph_body.png" />
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}