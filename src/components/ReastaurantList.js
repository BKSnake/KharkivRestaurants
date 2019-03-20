import React, { Component } from "react";
import { StyleSheet, View, TextInput, FlatList, Image } from "react-native";
import Header from "components/Header";
import axios from "axios";

import RestaurantRow from "components/RestaurantRow";
import PizzaImg from "images/pizza.png";

const restaurants = [
  { name: "Paprika", address: "Blab bala ba" },
  { name: "Буфrет", address: "prospekt Nauky" },
  { name: "Тратория", address: "Kosmicheskaya st" },
  { name: "Дегусто", address: "Blab bala ba" }
];

class ReastauranList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      restaurants: []
    };
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/restaurants")
      .then(result => this.setState({ restaurants: result.data }));
  }

  render() {
    const { searchText } = this.state;

    return (
      <View style={styles.component}>
        <View style={{ marginTop: 30, alignItems: "center" }}>
          <Image source={PizzaImg} />
        </View>

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
            <RestaurantRow
              place={item}
              index={index}
              navigation={this.props.navigation}
            />
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

export default ReastauranList;
