import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function Map(){

    const [myLocation, setMyLocation] = useState({latitude:48, longitude:2});
    useEffect(()=> {
        (async ()=>{
            const locationPermission = await Location.requestForegroundPermissionsAsync();

            if(locationPermission.status === "granted"){
                const location = await Location.getCurrentPositionAsync({});

                console.log(location);

                setMyLocation({latitude: location.coords.latitude, 
                                longitude: location.coords.longitude })
            }
        })(); 
    },[])

    return (
        <View style={styles.container}>
            {/* <Text>MAP</Text> */}
            <MapView region={{
                latitude: myLocation.latitude,
                longitude: myLocation.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }} style={styles.map}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent:'center',
    justifyContent:'center'
  },
  map:{
    width:"100%",
    height:"100%"
  }
})