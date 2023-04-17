import React from "react";
import Image from "next/image";
import styles from "../../components/Banner/Banner.module.css";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setUserState } from "../../redux/user.slice";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

type IBanner = {
  image: any;
  looking: number;
};

const Banner = ({ image, looking }: IBanner) => {
  const router = useRouter();
  const playerRef = React.useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [audioUrl, setAudioUrl] = React.useState<string>("");

  const userRedux = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsPlaying(false);
    setAudioUrl("/audio/gunload.wav");
    setIsPlaying(true);
    setClicked(true);
    dispatch(
      setUserState({
        ...userRedux,
        mapSelected: `${image.name}`.toLowerCase(),
      })
    );
    setTimeout(() => {
      router.push("/nades");
    }, 1000);
  };

  const handleLeave = () => {
    setIsPlaying(false);
  };

  const handleHover = () => {
    setIsPlaying(false);
    setAudioUrl("/audio/select.wav");
    setIsPlaying(true);
    dispatch(
      setUserState({
        ...userRedux,
        agentLooking: looking <= 3 ? "left" : "right",
      })
    );
  };
  return (
    <motion.div
      className={styles.coverMap}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      animate={{ opacity: clicked ? [1, 0] : 1 }}
      whileHover={{ scale: !clicked ? 1.1 : 3 }}
      transition={{
        duration: clicked ? 2 : 0.3,
      }}
    >
      <Image src={image.url} alt="" fill className={styles.mapImage} />
      <div className={styles.coverInfo}>
        <Image src={image.icon} alt="" className={styles.mapIcon} width={200} height={200} />
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
    </motion.div>
  );
};

export default Banner;
