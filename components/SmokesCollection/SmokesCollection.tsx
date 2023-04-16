import React from "react";
import { useState, useEffect } from "react";
import Smoke from "../Smoke/Smoke";
import styles from "../../components/SmokesCollection/SmokesCollection.module.css";

type ISmokesCollection = {
  map: string;
};

const ancientNades: string[] = [];
const anubisNades: string[] = [];
const dust2Nades: string[] = ["https://www.youtube.com/watch?v=F63Jo4t9KM0"];
const infernoNades: string[] = ["https://www.youtube.com/watch?v=tlSte8xV2j4"];
const mirageNades: string[] = [
  "https://www.youtube.com/watch?v=vycnXsYCNj0",
  "https://www.youtube.com/watch?v=-rdeHIf9xp0",
  "https://www.youtube.com/watch?v=-t5ZGTOJ1mA",
  "https://www.youtube.com/watch?v=-zCojafnnvw",
  "https://www.youtube.com/watch?v=1Txym-9Jzr0",
  "https://www.youtube.com/watch?v=4WEVgdF3ojo",
  "https://www.youtube.com/watch?v=5gNNbYV827w",
  "https://www.youtube.com/watch?v=BeVw1xldDMU",
  "https://www.youtube.com/watch?v=D_GQrjRITvw",
  "https://www.youtube.com/watch?v=DgNAYrHu67c",
  "https://www.youtube.com/watch?v=DkvPLplB68s",
  "https://www.youtube.com/watch?v=EcxjFnwU5wM",
  "https://www.youtube.com/watch?v=FPhdOq7RACg",
  "https://www.youtube.com/watch?v=GrR8gE6g1Pc",
  "https://www.youtube.com/watch?v=HLP39uhIx6c",
  "https://www.youtube.com/watch?v=JONSOldfXzI",
  "https://www.youtube.com/watch?v=MfL9ULWsEJI",
  "https://www.youtube.com/watch?v=O4n5aWuMZQU",
  "https://www.youtube.com/watch?v=OA3zbWHTDAA",
  "https://www.youtube.com/watch?v=PGaHWNmNiao",
  "https://www.youtube.com/watch?v=QEyn51WWCGA",
  "https://www.youtube.com/watch?v=QuU7AhQQbJ4",
  "https://www.youtube.com/watch?v=RnOL-UGQQVI",
  "https://www.youtube.com/watch?v=W27sj4eAWRA",
  "https://www.youtube.com/watch?v=W4AbVu5l0LE",
  "https://www.youtube.com/watch?v=WF1AZK_iWe8",
  "https://www.youtube.com/watch?v=XasNTxStcHM",
  "https://www.youtube.com/watch?v=_D8hrhMVsws",
  "https://www.youtube.com/watch?v=_IC21SW4mIE",
  "https://www.youtube.com/watch?v=aMUVFIzb1bs",
  "https://www.youtube.com/watch?v=culJdrHv4Wc",
  "https://www.youtube.com/watch?v=emVQOiD-wcs",
  "https://www.youtube.com/watch?v=g72kKB5q1Wc",
  "https://www.youtube.com/watch?v=hIT8tP7gp4U",
  "https://www.youtube.com/watch?v=ie9k4kjpmq8",
  "https://www.youtube.com/watch?v=p-5M0QsWhEs",
  "https://www.youtube.com/watch?v=pBcVnd5xpYQ",
  "https://www.youtube.com/watch?v=pj_vUYQvCTw",
  "https://www.youtube.com/watch?v=rRnzH7Ir-9c",
  "https://www.youtube.com/watch?v=s_VQAprhbGQ",
  "https://www.youtube.com/watch?v=tDee2SxK_Z0",
  "https://www.youtube.com/watch?v=vycnXsYCNj0",
  "https://www.youtube.com/watch?v=w_cmdzE9Wm0",
  "https://www.youtube.com/watch?v=xOSXBd0YeNk",
  "https://www.youtube.com/watch?v=xtcUyjO0T18",
  "https://www.youtube.com/watch?v=3dnzWDHhPEw",
  "https://www.youtube.com/watch?v=UvaiDeW8EK4",
  "https://www.youtube.com/watch?v=V7Q27t31Yc8",
  "https://www.youtube.com/watch?v=bpW0tAECRcU",
];
const nukeNades: string[] = [];
const overpassNades: string[] = [];
const vertigoNades: string[] = [];

const SmokesCollection = ({ map }: ISmokesCollection) => {
  const [listOfNades, setListOfNades] = useState<any[]>([]);

  useEffect(() => {
    switch (map) {
      case "ancient": {
        {
          setListOfNades(ancientNades);
        }
        break;
      }
      case "anubis": {
        {
          setListOfNades(anubisNades);
        }
        break;
      }
      case "dust2": {
        {
          setListOfNades(dust2Nades);
        }
        break;
      }
      case "inferno": {
        {
          setListOfNades(infernoNades);
        }
        break;
      }
      case "mirage": {
        {
          setListOfNades(mirageNades);
        }
        break;
      }
      case "nuke": {
        {
          setListOfNades(nukeNades);
        }
        break;
      }
      case "overpass": {
        {
          setListOfNades(overpassNades);
        }
        break;
      }
      case "vertigo": {
        {
          setListOfNades(vertigoNades);
        }
        break;
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      {map === "mirage" && (
        <h3 style={{ color: "white", position: "absolute", top: "0" }}>
          Due to the upload system for mirage, the loading may take up to 20-25 seconds. Sorry for
          that :D
        </h3>
      )}
      {listOfNades.length > 0 ? (
        listOfNades?.map((video: any, index: number) => (
          <>
            <Smoke video={video} key={index} />
          </>
        ))
      ) : (
        <h1 style={{ color: "white" }}>No videos yet</h1>
      )}
    </div>
  );
};

export default SmokesCollection;
