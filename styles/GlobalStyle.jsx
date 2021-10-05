import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        justifyContent:"center"
    },
    text:{
        fontWeight:'bold',
        color:"whitesmoke"
    }, 
    iconContainer:{
        flex:1,
        flexDirection: "row",
        justifyContent:"space-around",
        marginTop:50

    }
})