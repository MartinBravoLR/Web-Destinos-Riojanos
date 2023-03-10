import React, {useState } from "react";

//Templates Mui and Icon
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
  Alert

} from "@mui/material";

import LocationOnIcon from '@mui/icons-material/LocationOn';
//Api 

import api from "../services/api";
//Redux

import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../redux/appRedux";


export default function FormDialog({addNewPlace}) {
	
  const dispatch = useDispatch();

// React States 
  const [openC, setOpenC] = React.useState(false);
	const [places, setPlaces] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [payload, setPayload] = React.useState({
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
    const createHandleClickOpen = async(payload) => {
        console.log("Create Place")
        await NewPlaces(payload);
        getPlaces();
        setOpenC(true);
       setOpen(false);
       addNewPlace(payload);
      
      };
      
      const CreateHandleClose = () => {
        setOpenC(false);
      };

      const click = async() => {
        payload.image.push(payload.imageU)
        console.log(payload);
        await getPlaces();
        createHandleClickOpen(payload)
        
      };
    

  
    ///Crud Axios Functions 

    const getPlaces = async() =>{
        try {
            dispatch(appActions.loading(true));
            const result=await api.GET(api.places);
            if (result){
                console.log(`places: `,result.data);
                setPlaces(result.data);
            }
        } catch (error) {
            console.log(error);
        }
        finally {
          dispatch(appActions.loading(false));

        }

    }
    const NewPlaces = async(payload) =>{
     
        try {
            dispatch(appActions.loading(true));

            const result=await api.POST(api.places,payload);
            if (result){
                console.log(`Newplaces: `,result.data);

            }
        } catch (error) {
            console.log(error);
        }
        finally {
          dispatch(appActions.loading(false));

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
  <Button variant="contained" onClick={handleClickOpen} style={{borderRadius:20,margin:5}}>
    Agregar Destino
   </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Nuevo Destino!</DialogTitle>
   <DialogContent>
        <DialogContentText>
          Proporciona estos datos para crear un nuevo lugar.
        </DialogContentText>

    <Grid container spacing={3}>
            <Grid xs={12} item>
              <TextField 
              margin="dense"
              name="name"
              id="name" 
              label="Nombre" 
              variant="outlined"  
              fullWidth
              required
              onChange={handleChange}
              value={payload.name}
             />
          </Grid>
        <Grid xs={12} item>
          <TextField 
              margin="dense"
              name="locate"
              id="locate" 
              label="Ubicaci??n (Departamento)" 
              variant="outlined"  
              fullWidth
              required
              onChange={handleChange}
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
                  helperText="Ej. Reserva Natural,R??o,Lugar Hist??rico"
                  variant="outlined"  
                  fullWidth
                  required
                  onChange={handleChange}
                  value={payload.type}
                />
            </Grid>
      
          <Grid xs={12} item>
       
                <TextField 
                    multiline
                    margin="dense"
                    name="info"
                    id="info" 
                    label="Descripci??n del Destino" 
                    variant="outlined"  
                    fullWidth
                    required
                    onChange={handleChange}
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
                      value={payload.imageU}
                  />
            </Grid>

      </Grid>
         
   </DialogContent>
       
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={click}>Crear</Button>     
        </DialogActions>

 </Dialog>

  </div>
  );
}