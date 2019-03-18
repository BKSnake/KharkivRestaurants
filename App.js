/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const arrayOfList = [
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" }
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.component}>
        <Text style={styles.header}>Kharkiv Restaurant</Text>
        {arrayOfList.map((item, index) => (
          <View key={index} style={styles.cafeItem}>
            <View style={styles.cafeInfo}>
              <Text>{item.name}</Text>
              <Text style={styles.cafeAddress}>{item.address}</Text>
            </View>
            <Text style={styles.cafeGetInfo}>View Info</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1
  },
  header: {
    padding: 40,
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "#0066cc",
    fontWeight: "300"
  },
  cafeItem: {
    flexDirection: "row",
    padding: 15
  },
  cafeInfo: {
    flexDirection: "column",
    flex: 8
  },
  cafeAddress: {
    color: "grey"
  },
  cafeGetInfo: {
    flex: 2,
    alignContent: "center",
    justifyContent: "center"
  }
});
