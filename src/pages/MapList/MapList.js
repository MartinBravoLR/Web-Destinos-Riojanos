import React, { useEffect, useState } from "react";
import {MapContainer, Marker,Popup,TileLayer} from 'react-leaflet';
import "./App.css";

//Crud
import api from "../../services/api";
import ResponsiveAppBar from '../../components/navBar';


const MapList = () => {
    const [places, setPlaces] = useState(null);


  useEffect(() =>{
    getPlaces();
},[]);



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


  return (
    <MapContainer center={[-29.344890090721737, -66.86058361835023]} zoom={8}scrollWheelZoom={false}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
   
        {
          
          places && places.map(place=>(
          <Marker key={place._id}
            position={[place.coordinates.lat,place.coordinates.long]}
            >
                <Popup style={{ alignContent:"center"}}>
                    <h1>{place.name}</h1> <br />  
                  <div style={{borderRadius:20,backgroundColor:"#820000",height:40,width:180}}>
                    <h2 style={{ color:'white',alignContent:"center"}}>{place.type}</h2>
                  </div>
                </Popup>
            </Marker> ))
        }

   
  </MapContainer>
  )
}

export default MapList

