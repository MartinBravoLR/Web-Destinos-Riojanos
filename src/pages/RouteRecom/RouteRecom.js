import React from 'react'
import ResponsiveAppBar from '../../components/navBar';
import {
	  Grid,
    Card,
    CardContent,
    Typography,
    CardActionArea,
    CardMedia,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    Box
} from "@mui/material";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';

 const RouteRecom=()=> {
  return (
  <>
  <ResponsiveAppBar/>
<Box sx={{ bgcolor: '#4E6C50', p: 6, height:1500}} component="footer" align="center">
       
        <Typography variant="h3" align="center" gutterBottom>
          Requisitos para circular en Ruta
        </Typography>
        <img 
        style={{height:400,borderRadius:30,margin:30}}
        src='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/GKURNH3TLFFGDLS4D4DYSKVSSA.jpg'/>
        
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Documentación obligatoria para salir a la ruta
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      
    </List>
      </Box>



      </>
  )
}
export default RouteRecom;

