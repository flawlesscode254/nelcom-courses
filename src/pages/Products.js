import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import {
  ProductList,
  ProductCartWidget
} from '../components/_dashboard/products';

export default function EcommerceShop() {

  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Courses
        </Typography>

        <ProductList />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
