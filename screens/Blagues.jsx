import axios from 'axios'
import React, {useEffect} from 'react'
import { Text, View } from 'react-native'

export default function Blagues() {

    useEffect(()=>{
        axios.get('https://www.blagues-api.fr/api/random',{
            headers:{
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODQxMjExMDUzNzMxNzQxNzI3IiwibGltaXQiOjEwMCwia2V5IjoiUDJRTVZlTVJobzd2emREaEtCbDFUQmJUWUUxR2FDdkJ3TXZCbm1OVzlINzlKd1ZzV0giLCJjcmVhdGVkX2F0IjoiMjAyMS0xMC0wNVQxNDo0MTo0NyswMDowMCIsImlhdCI6MTYzMzQ0NDkwN30.oiW3aGvdrj1WBLcvboJ_edciQNve9NTbu6MnmpS3iCg'               
            },
            
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })

        return() =>{
            console.log('clean up')}
        }, []
    )
    return (
        <View>
            <Text>BLAGUES</Text>
        </View>
    )
}
