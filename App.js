import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Drawer from "./routes/Drawer";
import { globalStyle } from "./styles/GlobalStyle";

export default function App() {
  return (
    <View style={globalStyle.container}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
      {/* <StatusBar style='auto' /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
