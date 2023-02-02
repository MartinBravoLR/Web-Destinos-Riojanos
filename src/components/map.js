import React from 'react'
import {Grid} from '@mui/material'
import {MapContainer, Marker,Popup,TileLayer} from 'react-leaflet';
import {Icon} from 'leaflet'
import "./Map.css";

function Map(props) {

  return (
    <Grid> 
        <MapContainer center={[props.lat, props.long]} zoom={8}scrollWheelZoom={false}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                key={props._id}
                position={[props.lat,props.long]}
                >
                    <Popup style={{alignContent:"center"}}>
                    <h1>{props.name}</h1> <br />  
                    <div style={{borderRadius:20,backgroundColor:"#820000",height:40,width:180}}>
                     <h2 style={{ color:'white',alignContent:"center"}}>{props.type}</h2>
                    </div>
                    </Popup> 
                </Marker>

        
        </MapContainer>
    </Grid>  
  )
}

export default Map