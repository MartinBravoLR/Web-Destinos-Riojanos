import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
         Button,
         Typography,
         Card,
         CardContent,
         CardMedia,
         CardActionArea
        } from "@mui/material";

import img404 from "../../images/404.png";

const NotFound = () => {
  const navigate= useNavigate();

	return (
    <Card align="center" sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => navigate('/')}>
            <CardMedia
              component="img"
              height="240"
              weight="150"
              image={img404}
              alt="404 Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                    Página no encontrada!
              </Typography>
              <Typography variant="body2" color="info">
                  Lo sentimos, no pudimos encontrar la página que estás buscando.
                  ¿Quizás has escrito mal la URL? Asegúrese de revisar su ortografía
              </Typography>
            </CardContent>
            <Button to="/" size="large" variant="contained" color="info" onClick={() => navigate('/')}>
              Ir al Inicio
            </Button> 
        </CardActionArea>
   
  </Card>
    
	);
};
export default NotFound;


