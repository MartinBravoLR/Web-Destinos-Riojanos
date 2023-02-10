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

import ShieldIcon from '@mui/icons-material/Shield';
import ArticleIcon from '@mui/icons-material/Article';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CarRepairIcon from '@mui/icons-material/CarRepair';

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
        <ArticleIcon/>
        </ListItemIcon>
        <ListItemText primary="DNI y Licencia de Conducir" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShieldIcon />
        </ListItemIcon>
        <ListItemText primary="Seguro y Cedula Verde/Azul" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LocalFireDepartmentIcon />
        </ListItemIcon>
        <ListItemText primary="Matafuegos,Balizas y Chaleco reflectivo" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          < CarRepairIcon />
        </ListItemIcon>
        <ListItemText primary="Verificación técnica vehicular (VTV)" />
      </ListItemButton>
      
    </List>
      </Box>
    


      </>
  )
}
export default RouteRecom;

