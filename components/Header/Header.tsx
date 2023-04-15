import React from "react";
import styles from "../../components/Header/Header.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase, { auth } from "../../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { setUserState } from "../../redux/user.slice";
import { useRouter } from "next/router";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const dispatch = useDispatch();
  const userRedux = useSelector((state: any) => state.user.user);

  const firestore = firebase.firestore();
  const usersRef = firestore.collection("users");
  const queryUsers = usersRef.orderBy("id");
  //@ts-ignore
  const [users] = useCollectionData(queryUsers, { id: "id" });

  const { data, logged } = userRedux;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function getDocumentIdByFieldValue(field: string, value: any) {
    try {
      const querySnapshot = await firestore.collection("users").where(field, "==", value).get();
      if (querySnapshot.empty) {
        return null;
      } else {
        const document = querySnapshot.docs[0];
        return document.id;
      }
    } catch (error) {
      return null;
    }
  }

  async function getDocumentIdByFieldsValue(
    field: string,
    value: any,
    field2: string,
    value2: any
  ) {
    try {
      const querySnapshot = await usersRef
        .where(field, "==", value)
        .where(field2, "==", value2)
        .get();
      if (querySnapshot.empty) {
        return null;
      } else {
        const document = querySnapshot.docs[0];
        return document.id;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const createAccount = async (
    email: string | null,
    displayName: string | null,
    uid: string | null,
    providerId: string | null
  ) => {
    const verificareNume = await getDocumentIdByFieldValue("email", email);
    if (verificareNume === null) {
      {
        users &&
          (await usersRef.add({
            id: users.length + 1,
            name: displayName,
            email: email,
            uid: uid,
            providerId: providerId,
            admin: "0",
          }));
      }
    }
  };

  const checkAdmin = async (email: string | null) => {
    const verificareNume = await getDocumentIdByFieldsValue("email", email, "admin", "1");
    return verificareNume;
  };

  const handleGoogleSignIn = async () => {
    try {
      const googleAuth = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, googleAuth);
      const { email, displayName, uid, providerId } = user.providerData[0];
      await createAccount(email, displayName, uid, providerId);
      const checkAccess = await checkAdmin(email);
      dispatch(
        setUserState({
          ...userRedux,
          data: user.providerData[0],
          logged: true,
          admin: checkAccess === null ? false : true,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(
        setUserState({
          data: {},
          logged: false,
        })
      );
    }
  };

  const logout = async () => {
    dispatch(
      setUserState({
        data: {},
        logged: false,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        CS:GO
      </div>
      {/* {logged ? (
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 60, height: 60 }} src={data.photoURL || "/images/anubis.jpg"} />
        </IconButton>
      ) : (
        <button className={styles.login} onClick={handleGoogleSignIn}>
          Login
        </button>
      )} */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {userRedux.admin && <MenuItem onClick={logout}>Upload</MenuItem>}
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
