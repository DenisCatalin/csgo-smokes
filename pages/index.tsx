import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Collection from "../components/Collection/Collection";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>CS:GO - Raccoons Family</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Collection />
      <Footer />
    </div>
  );
};

export default Home;
