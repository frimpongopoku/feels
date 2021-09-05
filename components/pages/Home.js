import React from "react";
import { View, Text } from "react-native";
import { THEME } from "../../shared/values";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.folderArea}>
        <Text style={{ fontSize: 39, fontWeight: "bold" }}>BOOKS</Text>
        <Text style={{ marginLeft: "auto", fontWeight: "bold", fontSize: 18 }}>
          Frimpong Opoku Agyemang
        </Text>
      </View>
    </View>
  );
}

export const styles = {
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  folderArea: {
    ...THEME.Styles.flex,
    flexDirection: "row",
    width: "100%",
    paddingLeft: "6%",
    paddingRight: "6%",
    marginTop: 40,
    marginBottom: 40,
  },
};
