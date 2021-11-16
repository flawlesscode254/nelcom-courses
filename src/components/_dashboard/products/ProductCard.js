import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Box, Card, Link, Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fCurrency } from "../../../utils/formatNumber";

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
  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        <ProductImgStyle alt={name} src={imageUrl} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
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

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            target="_blank"
            variant="contained"
          >
            Purchase
          </Button>
          <Typography style={{
            color: "orangered"
          }} variant="subtitle1">
            &nbsp;
            {fCurrency(price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
