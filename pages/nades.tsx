import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import styles from "../styles/Nades.module.css";
import SmokesCollection from "../components/SmokesCollection/SmokesCollection";
import Image from "next/image";
import NavbarNades from "../components/NadesNavbar/NavbarNades";
import MapPoints from "../components/MapPoints/MapPoints";

const Nades = () => {
  const userRedux = useSelector((state: any) => state.user.user);
  const router = useRouter();
  const playerRef = React.useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
  const [image, setImage] = React.useState<string>("");

  useEffect(() => {
    setImage(`/images/${userRedux.mapSelected}_radar.jpg?v=${Date.now()}`);

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
      <div className={styles.container}>
        <div className={styles.map_radar}>
          <Image src={image} alt="" fill className={styles.map} blurDataURL={image} />
        </div>
        <div className={styles.navbar}>
          <NavbarNades />
        </div>
      </div>
      <MapPoints />
      {/* <SmokesCollection map={userRedux.mapSelected} /> */}
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
