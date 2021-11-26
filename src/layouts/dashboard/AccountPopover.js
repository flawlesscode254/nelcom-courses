import { useRef, useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  Button,
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import MenuPopover from "../../components/MenuPopover";
import { auth, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import emailjs from "emailjs-com";

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const signIn = async () => {
    await auth.signInWithPopup(provider);
    // await emailjs.send("service_yqwsm28", "template_wykzd77", {
    //   name: "Duncan",
    //   message: "Thank you for signing up to our platform. Please proceed to purchase one of our courses",
    //   recipient: auth.currentUser.email,
    //   reply_to: auth.currentUser.displayName,
    // }, "user_xHVbXCCpLxe2ww01cVcW6");
  };

  const signOut = async () => {
    await auth.signOut();
    await handleClose();
  };

  return (
    <>
      {!user && (
        <Button onClick={signIn} fullWidth target="_blank" variant="contained">
          Log In With Google
        </Button>
      )}

      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar src={user && user.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {user && user.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user && user.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            color="primary"
            type="submit"
            variant="outlined"
            onClick={signOut}
            style={{
              marginTop: 20,
              paddingLeft: 70,
              paddingRight: 70,
            }}
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
