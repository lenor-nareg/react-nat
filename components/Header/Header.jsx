import React from 'react'
import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from './HeaderStyle'
export default function Header(props) {
    // console.log(props)
    return (
        <View style={styles.header}>
            {/* <TouchableOpacity > */}
                <AntDesign  style={styles.button} onPress={()=>props.navigation.navigation.openDrawer()} name="menu-fold" size={24} color="whitesmoke" />
            {/* </TouchableOpacity> */}
            <Text style={styles.headerText}>{props.navigation.route.name}</Text>
        </View>
    )
}