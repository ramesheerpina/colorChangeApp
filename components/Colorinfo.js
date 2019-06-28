import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ColorInfo = () => (
  <View style={styles.container}>
    <Text style={styles.text}>TODO: Display Color</Text>
  </View>
);

ColorInfo.navigationOptions = {
  title: "Color Details"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    AlignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    margin: 10
  }
});

export default ColorInfo;
