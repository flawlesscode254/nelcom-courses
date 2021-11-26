import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import { Link, List } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

Another.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function Another({ name, price }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <List
          sx={{
            pt: 0,
            width: 200,
            height: 150,
          }}
        >
          <ListItem
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2.7,
            }}
          >
            <Link
              to={"/pay"}
              color="inherit"
              underline="hover"
              component={RouterLink}
              state={{
                name: name,
                price: price,
              }}
            >
              <Button fullWidth target="_blank" variant="contained">
                PayPal
              </Button>
            </Link>
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to={"/pesa"}
              color="inherit"
              underline="hover"
              component={RouterLink}
              state={{
                name: name,
                price: price,
              }}
            >
              <Button target="_blank" variant="contained">
                M-Pesa
              </Button>
            </Link>
          </ListItem>
        </List>
      </Dialog>
      <div>
        <Button target="_blank" variant="contained" onClick={handleClickOpen}>
          Purchase
        </Button>
      </div>
    </div>
  );
}

export default Another;
