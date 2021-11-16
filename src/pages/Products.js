import { Container, Typography } from "@mui/material";
import Page from "../components/Page";
import { ProductList } from "../components/_dashboard/products";
import { auth } from "../../src/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import LogIn from "./LogIn"

export default function EcommerceShop() {
  const [user] = useAuthState(auth);

  return (
    <Page title="Courses">
      {user ? (
        <Container>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Courses
          </Typography>

          <ProductList />
        </Container>
      ) : (
        <LogIn />
      )}
    </Page>
  );
}
