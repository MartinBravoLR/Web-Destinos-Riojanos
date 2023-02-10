import React from "react";
import {Carousel} from "react-bootstrap";
import {
  Button, colors,
} from "@mui/material";

import {Link} from 'react-router-dom';

const Hero=()=>{
  return (
      <Carousel>
          <Carousel.Item interval={900}>
            <img
              className="d-block w-100"
              src="https://media.viajando.travel/p/289f7f4cd2a3c8c0f225720eb694bb8f/adjuntos/236/imagenes/000/525/0000525683/1200x0/smart/la-rioja-se-presenta-la-feria-internacional-turismo-america-latina.png"
              alt="First slide"

            />
            <Carousel.Caption>
              <h3>Descubre nuestra Provincia</h3>
              <Link  style={{textDecoration:"none" ,color:"white"}}to={`/Destinos`}>
              <Button variant="contained" color="primary">Destinos</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item interval={900}>
            <img
              className="d-block w-100"
              src="https://www.prensar.net/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-05-at-14.14.26.jpeg"
              alt="Third slide"

            />

            <Carousel.Caption>
            <h3>Requisitos para circular en Ruta</h3>
            <Link  style={{textDecoration:"none" ,color:"white"}}to={`/Ruta`}>
            <Button variant="contained" color="secondary">Ver más</Button>
              </Link>

            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
  
  );
}

export default Hero;