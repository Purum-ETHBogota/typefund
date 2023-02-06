import Head from "next/head";
import FontView from "@/components/FontView";
import fontsMetadata from "@/components/FontMetadata";

type FontType = {
  weight: number[];
  italic: boolean;
  name: string;
  author: string;
};

const Home = () => {
  return (
    <>
      <Head>
        <title>TypeFund DAO</title>
        <meta name="description" content="DataDAO for global font designers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {fontsMetadata.map((font: FontType, idx: number) => (
          <FontView key={idx} font={font} />
        ))}
      </main>
    </>
  );
};

export default Home;
