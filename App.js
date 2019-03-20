/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import Header from "components/Header";
import axios from "axios";
import RestaurantRow from "components/RestaurantRow";

const restaurants = [
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буwerwerwewфет", address: "prospekt Nauky" },
  { name: "rwwrwerwerw", address: "Kosmicheskaya st" },
  { name: "wrwewer", address: "Blab bala ba" },
  { name: "Буrwrwerфет", address: "prospekt Nauky" },
  { name: "Trewrwerweatoriya", address: "Kosmicheskaya st" },
  { name: "rwerw", address: "Blab bala ba" },
  { name: "Буфwerwerет", address: "prospekt Nauky" },
  { name: "rwerw", address: "Kosmicheskaya st" },
  { name: "Pawwrwprika", address: "Blab bala ba" },
  { name: "Буwerweewфет", address: "prospekt Nauky" },
  { name: "ddsfs", address: "Kosmicheskaya st" },
  { name: "Papsdfsrika", address: "Blab bala ba" },
  { name: "Б4324уфет", address: "prospekt Nauky" },
  { name: "Trato4234riya", address: "Kosmicheskaya st" },
  { name: "P2342aprika", address: "Blab bala ba" },
  { name: "Буф253ет", address: "prospekt Nauky" },
  { name: "Pap5rika", address: "Blab bala ba" },
  { name: "Буфrет", address: "prospekt Nauky" },
  { name: "Tratgroriya", address: "Kosmicheskaya st" },
  { name: "Papridska", address: "Blab bala ba" },
  { name: "Буфsdfsdет", address: "prospekt Nauky" },
  { name: "Tratodfssriya", address: "Kosmicheskaya st" },
  { name: "Paprfika", address: "Blab bala ba" },
  { name: "Буфrtет", address: "prospekt Nauky" },
  { name: "Traretuutoriya", address: "Kosmicheskaya st" },
  { name: "Papoprteika", address: "Blab bala ba" },
  { name: "Буoiфет", address: "prospekt Nauky" },
  { name: "Trakkltoriya", address: "Kosmicheskaya st" },
  { name: "Paprppika", address: "Blab bala ba" },
  { name: "Буpppфет", address: "prospekt Nauky" },
  { name: "Trato----rllriya", address: "Kosmicheskaya st" }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      restaurants: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/restaurants")
      .then(result => this.setState({ restaurants: result.data }));
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

        <FlatList
          data={restaurants.filter(place => {
            return (
              !searchText ||
              place.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            );
          })}
          renderItem={({ item, index }) => (
            <RestaurantRow place={item} index={index} />
          )}
          keyExtractor={item => item.name}
          initialNumToRender={20}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1
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
