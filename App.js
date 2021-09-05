// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Authentication from "./components/pages/Authentication";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      {/* // <Authentication /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
