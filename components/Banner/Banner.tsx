import React from "react";
import Image from "next/image";
import styles from "../../components/Banner/Banner.module.css";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setUserState } from "../../redux/user.slice";
import ReactPlayer from "react-player";

type IBanner = {
  image: any;
  looking: number;
};

const Banner = ({ image, looking }: IBanner) => {
  const router = useRouter();
  const playerRef = React.useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const userRedux = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    router.push("/nades");
  };

  const handleLeave = () => {
    setIsPlaying(false);
  };

  const handleHover = () => {
    setIsPlaying(true);
    dispatch(
      setUserState({
        ...userRedux,
        mapSelected: `${image.name}`.toLowerCase(),
        agentLooking: looking <= 3 ? "left" : "right",
      })
    );
  };
  return (
    <div
      className={styles.coverMap}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <Image src={image.url} alt="" fill className={styles.mapImage} />
      <div className={styles.coverInfo}>
        <Image src={image.icon} alt="" className={styles.mapIcon} width={200} height={200} />
      </div>
      <ReactPlayer
        url={"/audio/select.wav"}
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

export default Banner;
