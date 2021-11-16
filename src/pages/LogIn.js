import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Typography, Container } from '@mui/material';
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

export default function Page404() {
  return (
    <RootStyle>
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Please login first to view the content
              </Typography>
            </motion.div>

            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src="/static/illustrations/illustration_register.png"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
            </motion.div>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
