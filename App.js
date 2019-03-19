/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Header from "components/Header";

const arrayOfList = [
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" },
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфет", address: "prospekt Nauky" },
  { name: "Tratoriya", address: "Kosmicheskaya st" }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
  }

  render() {
    const { searchText } = this.state;

    return (
      <View style={styles.component}>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Live Search"
          onChangeText={text => this.setState({ searchText: text })}
          value={searchText}
        />

        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          {arrayOfList
            .filter(place => {
              return (
                !searchText ||
                place.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
              );
            })
            .map((item, index) => (
              <View key={index} style={styles.cafeItem}>
                <View style={styles.cafeInfo}>
                  <Text>{item.name}</Text>
                  <Text style={styles.cafeAddress}>{item.address}</Text>
                </View>
                <Text style={styles.cafeGetInfo}>View Info</Text>
              </View>
            ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1
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
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5"
  }
});
