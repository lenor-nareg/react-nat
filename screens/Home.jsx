import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyle } from "../styles/GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import {FontAwesome5}  from "@expo/vector-icons";

export default function Home(props) {
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.text}> HOME </Text>

      <View style={globalStyle.iconsContainer}>
        <TouchableOpacity onPress={() => props.navigation.push("Contact")}>
          <AntDesign name="contacts" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.push("Camera")}>
          <AntDesign name="videocamera" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.push("Map")}>
          <FontAwesome5 name="map-marked-alt" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
