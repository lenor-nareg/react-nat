import React, { useState } from 'react'
import { Image, Modal, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons';
import {Cam as MyCam } from'../components/Cam/Cam'

export default function Cam() {
    const [isModal, setIsModal] = useState(false); 
    const [image, setImage] = useState(null);
    console.log(image);
    return (
        <View>
            <Modal style={{height:500, width:500}} visible={isModal}>
                <TouchableOpacity>
                    <Entypo onPress={()=> setIsModal(false)}
                    name="cross" size={30} color="black" />
                </TouchableOpacity>
            <MyCam closeModal={()=>setIsModal(false)}
                    onTakePic={setImage}></MyCam>  
            </Modal>
            <TouchableOpacity onPress={()=> setIsModal(true)}>
                
                <Text>Ouvrir Camera</Text>
                {image && <Image style={{height:300, width:300}} source={{uri : image.uri}} />}
            </TouchableOpacity>
        </View>
    )
}
