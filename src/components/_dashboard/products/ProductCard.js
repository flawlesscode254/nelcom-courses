import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Box, Card, Link, Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fCurrency } from "../../../utils/formatNumber";
import db, { auth } from "../../../firebase";

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ name, imageUrl, price, subject }) {
  const [tell, setTell] = useState();

  useEffect(() => {
    db.collection("courses")
      .where("email", "==", auth.currentUser.email)
      .where("course", "==", name)
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setTell(doc.data().course);
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        <ProductImgStyle alt={name} src={imageUrl} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        {tell === name ? (
          <Link
            to={`/${subject}`}
            color="inherit"
            underline="hover"
            component={RouterLink}
          >
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Link>
        ) : null}

        {tell === name ? (
          <h3
            style={{
              color: "#069943",
            }}
          >
            Purchased
          </h3>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
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
              <Button target="_blank" variant="contained">
                Purchase
              </Button>
            </Link>

            <Typography
              style={{
                color: "orangered",
              }}
              variant="subtitle1"
            >
              &nbsp;
              {fCurrency(price)}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Card>
  );
}
