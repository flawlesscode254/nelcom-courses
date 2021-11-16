import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

const courses = [
  {
    id: 1,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapplemagazine.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fimage-20.jpeg&f=1&nofb=1",
    name: "Microsoft Word",
    price: 8.10,
  },
  {
    id: 2,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcudoo.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fmicrosoft-excel.jpg&f=1&nofb=1",
    name: "Microsoft Excel",
    price: 8.50,
  },
  {
    id: 3,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexcelwithbusiness.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fmicrosoftaccess.jpg&f=1&nofb=1",
    name: "Micrsoft Access",
    price: 11.10,
  },
  {
    id: 4,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2019%2F02%2Fcw_microsoft_office_365_powerpoint-100787157-large.jpg&f=1&nofb=1",
    name: "Microsoft PowerPoint",
    price: 8.10,
  },
  {
    id: 5,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F_opS9Z5vqQYQ%2FTTYrMHXNiRI%2FAAAAAAAAAVA%2FH0gJ2oCoBTg%2Fs1600%2Fhtml5_bg_no_icons.png&f=1&nofb=1",
    name: "HTML 5",
    price: 15.10,
  },
  {
    id: 6,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd3t0dn7puh4fxw.cloudfront.net%2Fwp-content%2Fuploads%2F2013%2F09%2Fcss3.jpg&f=1&nofb=1",
    name: "CSS 3",
    price: 18.10,
  },
  {
      id: 7,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2560%2F0*ljnWAuUhEYej-FQ2.jpeg&f=1&nofb=1",
      name: "JavaScript",
      price: 25.10,
  },
  {
      id: 8,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.addthiscdn.com%2Fwp-content%2Fuploads%2F2014%2F11%2Faddthis-react-flux-javascript-scaling.png&f=1&nofb=1",
      name: "React JS",
      price: 29.10,
  },
  {
      id: 9,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2F4C6yPDywSUeWYLyg1h9G&f=1&nofb=1",
      name: "React Native",
      price: 30.10,
  },
  {
      id: 10,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mAvfp_Iyh-nfWIFJClWPzDd4lmRRcyeTd0ALw%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1",
      name: "Firebase",
      price: 18.10,
  },
  {
    id: 11,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.viget.com%2FGit-Tips-030718.png%3Fmtime%3D20180307141454&f=1&nofb=1",
    name: "Git",
    price: 15.10,
  },
  {
    id: 12,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd3gih7jbfe3jlq.cloudfront.net%2FAWS-Podcast-Title-Art.jpg&f=1&nofb=1",
    name: "AWS",
    price: 27.10,
  }
]

export default function ProductList() {
  return (
    <Grid container spacing={3}>
      {courses.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        </Grid>
      ))}
    </Grid>
  );
}
