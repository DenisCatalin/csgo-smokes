import React from "react";
import styles from "../../components/Collection/Collection.module.css";
import Banner from "../Banner/Banner";
import Image from "next/image";
import { useSelector } from "react-redux";

const images = [
  {
    url: "/images/ancient2.png",
    name: "Ancient",
    icon: "/images/icon_ancient.webp",
  },
  {
    url: "/images/anubis.png",
    name: "Anubis",
    icon: "/images/icon_anubis.webp",
  },
  {
    url: "/images/dust2.png",
    name: "Dust2",
    icon: "/images/icon_dust2.webp",
  },
  {
    url: "/images/inferno.png",
    name: "Inferno",
    icon: "/images/icon_inferno.webp",
  },
  {
    url: "/images/mirage.png",
    name: "Mirage",
    icon: "/images/icon_mirage.webp",
  },
  {
    url: "/images/nuke.png",
    name: "Nuke",
    icon: "/images/icon_nuke.webp",
  },
  {
    url: "/images/overpass.png",
    name: "Overpass",
    icon: "/images/icon_overpass.webp",
  },
  {
    url: "/images/vertigo.png",
    name: "Vertigo",
    icon: "/images/icon_vertigo.webp",
  },
];

const Collection = () => {
  const userRedux = useSelector((state: any) => state.user.user);
  return (
    <div className={styles.container}>
      {images.map((image: any, index: number) => (
        <Banner image={image} looking={index} key={index} />
      ))}
      <div className={styles.agentAbsolute}>
        <div className={styles.agent}>
          <Image
            src={userRedux.agentLooking === "left" ? "/images/agent2.png" : "/images/agent.png"}
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
