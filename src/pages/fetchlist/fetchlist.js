
import React, { useEffect, useState } from "react";
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
    DialogContent
} from "@mui/material";
import Form from '../../components/forms';

//Crud
import api from "../../services/api";
import ResponsiveAppBar from '../../components/navBar';

//Icons mui
import LocationOnIcon from '@mui/icons-material/LocationOn';


//Maps
import Map from "../../components/map"

const Fetchlist = () => {

	  const [places, setPlaces] = useState(null);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(
        {   _id:1231313,
            name:"examplename",
            image:["url1", "url2", "url3"],
            locate:"",
            coordinates:{lat:"",long:""},
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

    
      useEffect(() =>{
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
                const result=await api.GET(api.places);
                if (result){
                    console.log(`places: `,result.data);
                    setPlaces(result.data);
                }
            } catch (error) {
                console.log(error);
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
    <Grid container spacing={3} align="center" sx={{backgroundColor:"red"}}>
    <ResponsiveAppBar/>

        <Grid item xs={12}>
            <Typography component="div" variant="h5">
            Destinos Riojanos
            </Typography>
            
            <Form addNewPlace={addNewPlace}/>
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
        
         <DialogContent dividers>
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
            <Map _id={data._id} name={data.name} lat={data.coordinates.lat} long={data.coordinates.long} type={data.type}/>
        </DialogContent>
    </Dialog>

</> 
 )
}

export default Fetchlist
