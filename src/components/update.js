import React, {useState } from "react";

import {
	Grid,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  InputAdornment,
  

} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import api from "../services/api";


export default function Update({data}) {

// React States 
const [datos, setDatos] = React.useState(data);

  const [openC, setOpenC] = React.useState(false);
	const [places, setPlaces] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [payload, setPayload] = React.useState({
      _id:"",
      name: "",
      info: "",
      image: "",
      locate: "",
      coordinatesLat:"",
      coordinatesLong:"",
      imageU:"",
      image:[]
    });

    ///Save Function Click
      
      const CreateHandleClose = () => {
        setOpenC(false);
      };

      const click = async() => {
        payload.image.push(payload.imageU)
        console.log(payload);
        UpdatePlace(payload,data);
        window.location.reload()

      };
    

  
    ///Crud Axios Functions 

    const UpdatePlace = async(payload,data) =>{
     
        try {
            const result=await api.PATCH(api.placesURL+data._id,payload);
            if (result){
                console.log(`Update: `,result.data);

            }
        } catch (error) {
            console.log(error);
        }
    }

 

      ///Inputs function and saves logic

      const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({ ...payload, [name]: value  });
        console.log(payload);
      };

      ////DIALOG

      const handleClickOpen = () => {
       setOpen(true);
       };

       const handleClose = () => {
       setOpen(false);
        } ;

  return (
  <div>

  <Button variant="contained" color="secondary"endIcon={<CreateIcon />} onClick={handleClickOpen}>
    Update
  </Button>
 <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Actualiza los datos de {datos.name}!</DialogTitle>
   <DialogContent>
        <DialogContentText>
          Proporciona los nuevos datos para Actualizar el Destino.
          <br />
          Pd:Si no quieres cambiar algunos no lo completes
          <br />
        </DialogContentText>

    <Grid container spacing={3}>
         <Grid xs={12} item>
              <TextField 
              margin="dense"
              name="_id"
              id="_id" 
              label="_id" 
              variant="outlined"  
              fullWidth
              onChange={handleChange}
              defaultValue={datos._id}
              value={payload._id}
              disabled
             />
          </Grid>
            <Grid xs={12} item>
              <TextField 
              margin="dense"
              name="name"
              id="name" 
              label="Nombre" 
              variant="outlined"  
              fullWidth
              onChange={handleChange}
              defaultValue={datos.name}
              value={payload.name}
             />
          </Grid>
        <Grid xs={12} item>
          <TextField 
              margin="dense"
              name="locate"
              id="locate" 
              label="Ubicación (Departamento)" 
              variant="outlined"  
              fullWidth
              required
              
              onChange={handleChange}
              defaultValue={datos.locate}
              value={payload.locate}
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                        <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
            />
          </Grid>
      

       <Grid item xs={12} sm={6}>
                <TextField
                  name="coordinatesLat"
                  required
                  fullWidth
                  id="coordinatesLat"
                  label="Coordenadas Latitude"
                  onChange={handleChange}
                  value={payload.coordinatesLat}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="coordinatesLong"
                  label="Coordenadas Longitude"
                  name="coordinatesLong"
                  onChange={handleChange}

                  value={payload.coordinatesLong}

                />
              </Grid>
              <Grid xs={12} item>
       
       <TextField 
           multiline
           margin="dense"
           name="type"
           id="type" 
           label="Tipo de Destino" 
           helperText="Ej. Reserva Natural,Río,Lugar Histórico"
           variant="outlined"  
           fullWidth
           required

           onChange={handleChange}
           defaultValue={datos.type}

           value={payload.type}
         />
     </Grid>
          <Grid xs={12} item>
       
                <TextField 
                    multiline
                    margin="dense"
                    name="info"
                    id="info" 
                    label="Descripción del Destino" 
                    variant="outlined"  
                    fullWidth
                    required
                    onChange={handleChange}
                    defaultValue={datos.info}

                    value={payload.info}
                />
          </Grid>

          <Grid xs={12} item>
                
                <TextField 
                      multiline
                      margin="dense"
                      name="imageU"
                      id="imageU" 
                      label="Imagenes del Destino" 
                      variant="outlined"  
                      fullWidth
                      required
                      onChange={handleChange}
                      defaultValue={datos.imageU}

                      value={payload.imageU}
                  />
            </Grid>

      </Grid>
         
   </DialogContent>
       
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={click}>Actualizar</Button>     
        </DialogActions>

 </Dialog>

  </div>
  );
}