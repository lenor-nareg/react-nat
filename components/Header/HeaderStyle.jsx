import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    header:{
        justifyContent:'center',
        alignItems:'center',
        height:95,
        // width:"100%",
        
        flexDirection:"row",
        backgroundColor:"royalblue",
        position:"relative",
        paddingTop:20
    },
    headerText:{
        color:"whitesmoke",
        fontSize:20,
        fontWeight:"bold",
        margin:"auto",
        textAlign:"center",
    },
    button:{
        position:"absolute",
        left:15,
        top:"60%",
        width:50
    }
})