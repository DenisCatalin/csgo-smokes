import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import SmokesCollection from "../components/SmokesCollection/SmokesCollection";

const Nades = () => {
  const userRedux = useSelector((state: any) => state.user.user);
  const router = useRouter();
  const playerRef = React.useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);

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
      <ReactPlayer
        url={"/audio/shot.wav"}
        playing={isPlaying}
        ref={playerRef}
        volume={0.3}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Nades;
