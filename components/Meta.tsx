import Head from "next/head";

function Meta() {
  return (
    <Head>
      <title>FlowCoach</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="FlowCoach App is developed by Rasmus Elmersson"
      />
      <meta
        name="keywords"
        content="FlowCoach app, next.js, typescript, tailwind css, fertile window, approximate ovulation, next period, pregnancy test day, cycle, health, calculator"
      />
      <meta name="author" content="Rasmus Elmersson" />
      <meta
        name='msapplication-TileImage'
        content='/code-of-relevancy-logo.png'
      />

      {/* Open Graph Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='FlowCoach' />
      <meta
        property='og:description'
        content='FlowCoach App is developed by Rasmus Elmersson'
      />
      <meta
        property='og:url'
        content='https://www.rasmuselmersson.se/'
      />
      <meta property='og:site_name' content='FlowCoach' />
      <meta property='og:image' content='/code-of-relevancy-logo.png' />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />
      <meta property='og:locale' content='en_US' />

      {/* App Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;
