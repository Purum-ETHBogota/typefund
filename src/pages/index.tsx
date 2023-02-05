import Head from "next/head";
import Image from "next/image";
import FontView from "@/components/FontView";

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
        <FontView />
        <h1>Hola vale, soy una prueba</h1>
      </main>
    </>
  );
}

export default Home;