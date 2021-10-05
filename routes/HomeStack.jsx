import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Cam from '../screens/Cam';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import Map from '../screens/Map';


const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:"whitesmoke"
            },
            headerTitleStyle:{
                color:"black",
                fontWeight:"bold"
            }
        }}> 
            <Stack.Screen options={{headerShown:false}} name="Acceuil" component={Home}/>
            <Stack.Screen name="Contact" component={Contact}/>
            <Stack.Screen name="Camera" component={Cam}/>
            <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator>
    )
}
