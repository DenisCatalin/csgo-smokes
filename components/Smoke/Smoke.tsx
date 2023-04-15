import React from "react";
import styles from "../../components/Smoke/Smoke.module.css";
import YouTube from "react-youtube";

type ISmoke = {
  video: any;
};

const Smoke = ({ video }: ISmoke) => {
  const match = video.match(/(?:v=)([\w\d-]+)/);
  const videoId = match ? match[1] : null;

  return (
    <div className={styles.container}>
      <YouTube videoId={videoId} />
    </div>
  );
};

export default Smoke;
