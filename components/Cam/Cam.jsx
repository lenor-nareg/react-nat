import { Camera } from 'expo-camera'
import React, {useState, useEffect, useRef} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export  function Cam(props) {
    
    const [cameraPermission, setCameraPermission] = useState(null);
    
    const [camType, setCamType] = useState(Camera.Constants.Type.front);
    
    const cameraRef = useRef(null);
    
    useEffect(() => {
        (async () =>{
            const status = await Camera.requestPermissionsAsync();
            console.log(status);
            setCameraPermission(status.status === "granted")
        })()
    }, [])

    const takePicture = async ()=>{
        console.log('ckicke')
        const img = await cameraRef.current.takePictureAsync();
        console.log(img);
        props.onTakePic(img);
        props.closeModal();

    }

    if(!cameraPermission){
        return(  
        <View>
            <Text>
                No access camera
            </Text>
        </View>)
    }

    return (
        <View style={{flex:1}}>
            <Camera ref={cameraRef} type={camType} style={styles.camera}>
                <View style={styles.iconsContainer}>
               
                <Ionicons style={{marginHorizontal:20,}} onPress={ ()=> setCamType(camType === Camera.Constants.Type.back ? Camera.Constants.Type.front :Camera.Constants.Type.back)  } name="md-camera-reverse" size={50} color="red" />
                
                <MaterialIcons onPress={takePicture} style={{marginHorizontal:20,paddingTop:3}} name="camera" size={47} color="green" />
                </View>
           
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    camera:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    iconsContainer:{
        flexDirection:"row",
        

    }
})
