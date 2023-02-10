
import React, { useEffect, useState } from "react";

//Templates Mui and Icon
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
    Box,
    
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import Form from '../../components/forms';
import Update from '../../components/update';

import {Link} from 'react-router-dom';
//Crud
import api from "../../services/api";
import ResponsiveAppBar from '../../components/navBar';

//Icons mui
import LocationOnIcon from '@mui/icons-material/LocationOn';

//Redux
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";

//Maps
import Map from "../../components/map"

const Fetchlist = () => {

    //Redux
	const dispatch = useDispatch();

    //Hooks
	const [places, setPlaces] = useState(null);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(
        {   _id:1231313,
            name:"examplename",
            image:["url1", "url2", "url3"],
            locate:"",
            coordinatesLat:"",
            coordinatesLong:"",
            type:"National Park",
            info:"lorem"
    });

 ///Dialog LOGIC OPEN / CLOSE
    const handleClickOpen = (item) => {
        
        console.log(typeof(item));
        setData(item);
        console.log(data);

        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

      const ClickDelete = async(data) => {
        await deletePlace(data);
        window.location.reload()
          };

      useEffect(() =>{
        dispatch(appActions.setPageTitle("Places"));

        getPlaces();
    },[]);
     
    
    //CRUD LOGIC
    
    const addNewPlace=(item) => {
             setPlaces(prevState=>{
            return [...prevState,item]
            });
        }
    
    //CRUD FUNCTIONS
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
        
        const deletePlace = async(data) =>{
            
            const url=api.placesURL+data._id
            try {
                dispatch(appActions.loading(true));
                console.log(url);
                const result=await api.DELETE(url);
                    
            } catch (error) {
                console.log(error);
            }
            finally {
                dispatch(appActions.loading(false));

            }
        }
        
///Item card Generator
    const renderItem = (item) => {
 
        return(
            <Card sx={{ maxHeight: 400,maxWidth: 345,borderRadius:5}} onClick={()=>handleClickOpen(item)}>
            <CardActionArea sx={{ maxHeight: 400,maxWidth: 345,borderRadius:5}}>
                <CardMedia
                  sx={{maxHeight: 280,borderRadius:5}}
                  component="img"
                  height="140"
                  image={item.image[0]}
                  alt={`${item.name} image`}
                />
                <CardContent> 
                    <Typography gutterBottom variant="h5" component="div" align="center">
                    {item.name}
                    </Typography>
                    <Button variant="outlined" startIcon={<LocationOnIcon />} color="error">
                    {item.locate}
                    </Button>
                </CardContent>
            </CardActionArea>
          </Card>
        )
        }
    
  return (
    <>
        <Grid container spacing={3} align="center" sx={{backgroundColor:"#F2DEBA"}}>
                <ResponsiveAppBar/>

                    <Grid item xs={12}>
                        <Typography component="div" variant="h2">
                        Destinos 
                        </Typography>
                        
                    </Grid>
            
                {
                places && places.map((p, index)=>{
                    return(
                        <Grid item lg={4} md={2} key={index}>
                        {renderItem(p)}
                        </Grid>
                        )
                    })
                }
            </Grid>

                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    maxWidth={"md"}
                    minWidth={"xs"}
                >

                    <DialogTitle id="customized-dialog-title" onClose={handleClose} sx={{ fontFamily:"arial",fontWeight: 'fontWeightLight' }} >
                    {data.name}
                    </DialogTitle>
                
                    <DialogContent dividers align="center">
                    <Typography gutterBottom align="justify">
                        {data.info}
                    </Typography>
                    <CardMedia
                            maxWidth={"md"}
                            minWidth={"xs"}
                            component="img"
                            height="400"
                            image={data.image[0]}
                            alt={`${data.name} image`}
                            />
                        
                        <Button variant="contained" color="primary" sx={ { borderRadius: 28 ,margin:1} }>{data.type}</Button>
                        
                        <Map _id={data._id} name={data.name} lat={data.coordinatesLat} long={data.coordinatesLong} type={data.type}/>
                    
                            <Button variant="contained" sx={{margin:1}}startIcon={<DeleteIcon />} color="error" onClick={()=>{ClickDelete(data)}}>
                                Delete
                            </Button>
                            <Update data={data}/>
                    </DialogContent>
        </Dialog>

        <Box sx={{ bgcolor: '#4E6C50', p: 6 }} component="footer" align="center">
                <Typography variant="h5" align="center" gutterBottom>
                    Contribuye con nosotros!
                </Typography>
                <Form addNewPlace={addNewPlace}/>
                <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
                >
                    Describe el lugar y lo añadiremos a nuestra base de datos
                </Typography>
        </Box>
    </> 
 )
}

export default Fetchlist
