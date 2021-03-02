import Document, { Html, Head, NextScript, Main } from 'next/document'

export default class MyDocument extends Document {

     openGraphTags = {
        currentURL: 'https://moveit-ruddy-mu.vercel.app/',
        previewImage: 'icons/body.svg',
        siteName: 'move.it',
        pageTitle: "Home",
        description: 'The Pomodoro technique plus gamification',
    }

    render() {
        return (
            <Html>
                <Head>
                    
                    <meta property="og:url" content={this.openGraphTags.currentURL} key="ogurl" />
                    <meta property="og:image" content={this.openGraphTags.previewImage} key="ogimage" />
                    <meta property="og:site_name" content={this.openGraphTags.siteName} key="ogsitename" />
                    <meta property="og:title" content={this.openGraphTags.pageTitle} key="ogtitle" />
                    <meta property="og:description" content={this.openGraphTags.description} key="ogdesc" />   


                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
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