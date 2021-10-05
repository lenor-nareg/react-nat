import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Blagues from '../screens/Blagues';

const Stack = createStackNavigator();
export default function BlaguesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Blagues" component={Blagues} />
        </Stack.Navigator>
    )
}
