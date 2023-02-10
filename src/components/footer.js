import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://linkedin.com/in/martin-bravolr">
        Turist Web-MB
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#4E6C50', py: 6 }}>
      
      <Container maxWidth="lg" align="center">
    
      <img
        src="https://scontent.firj1-1.fna.fbcdn.net/v/t1.6435-9/79355650_977476105953170_4668360860677177344_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=vq82pc_VyNoAX9_mkXQ&_nc_ht=scontent.firj1-1.fna&oh=00_AfASM2m2BuEUhkwb5B8OOXKlIsszaBx_By9OWHt3y-uUug&oe=63F556D5"
        alt="First slide"
        style={{height:100,width:250,borderRadius:20}}
      />    

        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;