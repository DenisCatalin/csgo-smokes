import Image from "next/image";
import styles from "./MapPoints.module.css";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { DUST2_NADES } from "../../lib/dust2_nades";
import { INFERNO_NADES } from "../../lib/inferno_nades";
import { ANCIENT_NADES } from "../../lib/ancient_nades";
import { MIRAGE_NADES } from "../../lib/mirage_nades";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { motion } from "framer-motion";
import { setUserState } from "../../redux/user.slice";
import { NUKE_NADES } from "../../lib/nuke_nades";
import { ANUBIS_NADES } from "../../lib/anubis_nades";
import { OVERPASS_NADES } from "../../lib/overpass_nades";
import { VERTIGO_NADES } from "../../lib/vertigo_nades";
import Smoke from "../../components/Smoke/Smoke";

const MapPoints = () => {
  const [points, setPoints] = useState<any[]>([]);
  const [open, setOpen] = React.useState(false);
  const [dialogContent, setDialogContent] = useState<any[]>([]);

  const dispatch = useDispatch();
  const userRedux = useSelector((state: any) => state.user.user);
  const { mapSelected, nadeSelected, selectedPosition } = userRedux;

  const handleClickOpen = (position: string) => {
    dispatch(
      setUserState({
        ...userRedux,
        selectedPosition: position,
      })
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getVideos();
  }, [selectedPosition]);

  useEffect(() => {
    getMapSelected();
  }, [nadeSelected]);

  return (
    <>
      {points &&
        points?.map((point: any, index: number) => (
          <motion.div
            key={index}
            onClick={() => handleClickOpen(point.name)}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <Tooltip title={point.name} placement={point.tooltipPosition} key={index}>
              <Image
                src={point.image}
                alt={point.name}
                key={index}
                width={30}
                height={30}
                className={styles.point}
                style={{ top: point.top, left: point.left }}
              />
            </Tooltip>
          </motion.div>
        ))}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"lg"}
      >
        <DialogTitle style={{ background: "#141414", color: "#eee" }} id="alert-dialog-title">
          {"Videos"}
        </DialogTitle>
        <DialogContent style={{ background: "#141414" }}>
          {dialogContent?.map((content: any, index: number) => (
            <Smoke video={content} key={index} />
          ))}
        </DialogContent>
        <DialogActions style={{ background: "#141414" }}>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );

  function getVideos() {
    switch (mapSelected) {
      case "ancient": {
        switch (nadeSelected) {
          case "smoke": {
            const positions = ANCIENT_NADES.smokes;
            positions.map((position: any) => {
              if (position.name === selectedPosition) {
                setDialogContent(position.urls);
              }
            });
            break;
          }
          case "grenade": {
            const positions = ANCIENT_NADES.smokes;
            positions.map((position: any) => {
              if (position.name === selectedPosition) {
                setDialogContent(position.urls);
              }
            });
            break;
          }
          case "flashbang": {
            const positions = ANCIENT_NADES.smokes;
            positions.map((position: any) => {
              if (position.name === selectedPosition) {
                setDialogContent(position.urls);
              }
            });
            break;
          }
          case "molotov": {
            const positions = ANCIENT_NADES.smokes;
            positions.map((position: any) => {
              if (position.name === selectedPosition) {
                setDialogContent(position.urls);
              }
            });
            break;
          }
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  function getMapSelected() {
    switch (mapSelected) {
      case "ancient": {
        switch (nadeSelected) {
          case "smoke": {
            setPoints(ANCIENT_NADES.smokes);
            break;
          }
          case "grenade": {
            setPoints(ANCIENT_NADES.grenades);
            break;
          }
          case "flashbang": {
            setPoints(ANCIENT_NADES.flashbangs);
            break;
          }
          case "molotov": {
            setPoints(ANCIENT_NADES.molotovs);
            break;
          }
        }
        break;
      }
      case "dust2": {
        switch (nadeSelected) {
          case "smoke": {
            setPoints(DUST2_NADES.smokes);
            break;
          }
          case "grenade": {
            setPoints(DUST2_NADES.grenades);
            break;
          }
          case "flashbang": {
            setPoints(DUST2_NADES.flashbangs);
            break;
          }
          case "molotov": {
            setPoints(DUST2_NADES.molotovs);
            break;
          }
        }
        break;
      }
      case "inferno": {
        switch (nadeSelected) {
          case "smoke": {
            setPoints(INFERNO_NADES.smokes);
            break;
          }
          case "grenade": {
            setPoints(INFERNO_NADES.grenades);
            break;
          }
          case "flashbang": {
            setPoints(INFERNO_NADES.flashbangs);
            break;
          }
          case "molotov": {
            setPoints(INFERNO_NADES.molotovs);
            break;
          }
        }
        break;
      }
      case "mirage": {
        switch (nadeSelected) {
          case "smoke": {
            setPoints(MIRAGE_NADES.smokes);
            break;
          }
          case "grenade": {
            setPoints(MIRAGE_NADES.grenades);
            break;
          }
          case "flashbang": {
            setPoints(MIRAGE_NADES.flashbangs);
            break;
          }
          case "molotov": {
            setPoints(MIRAGE_NADES.molotovs);
            break;
          }
        }
        break;
      }
      case "nuke": {
        switch (nadeSelected) {
          case "smoke": {
            setPoints(NUKE_NADES.smokes);
            break;
          }
          case "grenade": {
            setPoints(NUKE_NADES.grenades);
            break;
          }
          case "flashbang": {
            setPoints(NUKE_NADES.flashbangs);
            break;
          }
          case "molotov": {
            setPoints(NUKE_NADES.molotovs);
            break;
          }
        }
        break;
      }
      case "anubis": {
        switch (nadeSelected) {
          case "smoke": {
            setPoints(ANUBIS_NADES.smokes);
            break;
          }
          case "grenade": {
            setPoints(ANUBIS_NADES.grenades);
            break;
          }
          case "flashbang": {
            setPoints(ANUBIS_NADES.flashbangs);
            break;
          }
          case "molotov": {
            setPoints(ANUBIS_NADES.molotovs);
            break;
          }
        }
        break;
      }
      case "overpass": {
        switch (nadeSelected) {
          case "smoke": {
            setPoints(OVERPASS_NADES.smokes);
            break;
          }
          case "grenade": {
            setPoints(OVERPASS_NADES.grenades);
            break;
          }
          case "flashbang": {
            setPoints(OVERPASS_NADES.flashbangs);
            break;
          }
          case "molotov": {
            setPoints(OVERPASS_NADES.molotovs);
            break;
          }
        }
        break;
      }
      case "vertigo": {
        switch (nadeSelected) {
          case "smoke": {
            setPoints(VERTIGO_NADES.smokes);
            break;
          }
          case "grenade": {
            setPoints(VERTIGO_NADES.grenades);
            break;
          }
          case "flashbang": {
            setPoints(VERTIGO_NADES.flashbangs);
            break;
          }
          case "molotov": {
            setPoints(VERTIGO_NADES.molotovs);
            break;
          }
        }
        break;
      }
      default: {
        break;
      }
    }
  }
};

export default MapPoints;
