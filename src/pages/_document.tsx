import Document, { Html, Head, NextScript, Main } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:title" content="move.it" />
                    <meta property="og:image" content="logo-full.png" />
                    <meta property="og:description" content="The Pomodoro technique plus gamification" />
                    <meta property="og:url" content="https://moveit-ruddy-mu.vercel.app/" />
                    <meta property="og:type" content="website" />

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