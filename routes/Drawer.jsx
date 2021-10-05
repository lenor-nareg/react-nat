import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import BlaguesStack from './BlaguesStack';
import HomeStack from './HomeStack';
import Header from '../components/Header/Header'
const MyDrawer = createDrawerNavigator();
export default function Drawer() {
    return (
        <MyDrawer.Navigator screenOptions={{
            header:(props)=>(<Header navigation={props} />),
            drawerStyle: {
                backgroundColor: 'royalBlue',
                width: 240,
            },
            drawerActiveTintColor:'white',
            drawerInactiveTintColor:'yellow'
        }}  >
            <MyDrawer.Screen name="HomeStack" component={HomeStack}/>
            <MyDrawer.Screen name="BlaguesStack" component={BlaguesStack}/>
        </MyDrawer.Navigator>
    )
}