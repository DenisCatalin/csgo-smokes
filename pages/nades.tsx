import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import SmokesCollection from "../components/SmokesCollection/SmokesCollection";

const Nades = () => {
  const userRedux = useSelector((state: any) => state.user.user);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    const navigate = async () => {
      try {
        await router.push(`/nades#${userRedux.mapSelected}`);
      } catch (error) {
        if (isMounted) {
          console.log(error);
        }
      }
    };

    navigate();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className="container">
      <Head>
        <title>CS:GO - Nades on {userRedux.mapSelected} </title>
      </Head>
      <Header />
      <SmokesCollection map={userRedux.mapSelected} />
      <Footer />
    </div>
  );
};

export default Nades;
