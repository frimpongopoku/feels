import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { THEME } from "./../../shared/values";
import window from "./../../shared/images/dark-window.jpg";
export default function Authentication() {
  return (
    <View style={styles.container}>
      <Image source={window} />
      <View style={styles.overlay}></View>
      <View style={styles.content}>
        <Text style={styles.appTitle}>CONFIDANTE</Text>
        <TouchableOpacity>
          <Text style={styles.authButton}>LOGIN WITH GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: THEME.green,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: THEME.Green,
    opacity: 0.6,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    ...THEME.Styles.flex,
  },
  appTitle: {
    fontSize: 95,
    color: "white",
    fontWeight: "bold",
  },
  authButton: {
    backgroundColor: "white",
    color: "black",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
});
