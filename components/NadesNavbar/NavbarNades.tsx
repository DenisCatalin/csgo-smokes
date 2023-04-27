import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/Nades.module.css";
import { motion } from "framer-motion";
import { setUserState } from "../../redux/user.slice";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";

const NavbarNades = () => {
  const userRedux = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();

  const playerRef = useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string>("");

  const handleHover = () => {
    setIsPlaying(false);
    setAudioUrl("/audio/select.wav");
    setIsPlaying(true);
  };

  const handleOver = () => {
    setIsPlaying(false);
  };

  const handleClick = (nade: string) => {
    setIsPlaying(false);
    setAudioUrl("/audio/whoosh.mp3");
    setIsPlaying(true);
    dispatch(
      setUserState({
        ...userRedux,
        nadeSelected: nade,
      })
    );
  };

  return (
    <>
      <div className={styles.nade}>
        <motion.div
          className={styles.nade_image}
          whileHover={{ filter: "grayscale(0%)", scale: 1.1 }}
          style={{ filter: "grayscale(100%)" }}
          onClick={() => handleClick("flashbang")}
          onMouseEnter={handleHover}
          onMouseLeave={handleOver}
        >
          <Image src={"/images/flashbang.png"} alt="flashbang" width={80} height={80} />
          <h1 className={styles.nade_name} style={{ color: "rgb(48, 99, 90)" }}>
            Flashbang
          </h1>
        </motion.div>
      </div>
      <div className={styles.nade}>
        <motion.div
          className={styles.nade_image}
          whileHover={{ filter: "grayscale(0%)", scale: 1.1 }}
          style={{ filter: "grayscale(100%)" }}
          onClick={() => handleClick("grenade")}
          onMouseEnter={handleHover}
          onMouseLeave={handleOver}
        >
          <Image src={"/images/grenade.png"} alt="grenade" width={80} height={80} />
          <h1 className={styles.nade_name} style={{ color: "rgb(170, 168, 66)" }}>
            Grenade
          </h1>
        </motion.div>
      </div>
      <div className={styles.nade}>
        <motion.div
          className={styles.nade_image}
          whileHover={{ filter: "grayscale(0%)", scale: 1.1 }}
          style={{ filter: "grayscale(100%)" }}
          onClick={() => handleClick("molotov")}
          onMouseEnter={handleHover}
          onMouseLeave={handleOver}
        >
          <Image src={"/images/molotov.png"} alt="molotov" width={80} height={80} />
          <h1 className={styles.nade_name} style={{ color: "rgb(153, 115, 71)" }}>
            Molotov
          </h1>
        </motion.div>
      </div>
      <div className={styles.nade}>
        <motion.div
          className={styles.nade_image}
          whileHover={{ filter: "grayscale(0%)", scale: 1.1 }}
          style={{ filter: "grayscale(100%)" }}
          onClick={() => handleClick("smoke")}
          onMouseEnter={handleHover}
          onMouseLeave={handleOver}
        >
          <Image src={"/images/smoke.png"} alt="smoke" width={80} height={80} />
          <h1 className={styles.nade_name} style={{ color: "rgb(153, 115, 71)" }}>
            Smoke
          </h1>
        </motion.div>
      </div>
      <ReactPlayer
        url={audioUrl}
        playing={isPlaying}
        ref={playerRef}
        volume={0.3}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{ display: "none" }}
      />
    </>
  );
};

export default NavbarNades;
