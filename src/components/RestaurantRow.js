import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";

export default class RestaurantRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false
    };
  }
  onPress = () => {
    this.setState(state => ({ showInfo: !state.showInfo }));
  };

  render() {
    const { place, index } = this.props;
    const { showInfo } = this.state;

    return (
      <View style={styles.container}>
        <View
          key={index}
          style={[
            styles.cafeItem,
            { backgroundColor: index % 2 === 0 ? "white" : "#f3f3f7" }
          ]}
        >
          <View style={styles.edges}>
            <Text>{index + 1}</Text>
          </View>
          <View style={styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style={styles.addressText}>{place.address}</Text>
          </View>
          <View style={styles.edges}>
            <TouchableHighlight
              onPress={this.onPress}
              style={styles.button}
              underlayColor="#5398dc"
            >
              <Text style={styles.buttonText}>Info</Text>
            </TouchableHighlight>
          </View>
        </View>
        {showInfo && (
          <View style={styles.info}>
            <Text>Show Info</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  cafeItem: {
    flexDirection: "row",
    padding: 15
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50
  },
  nameAddress: {
    flexDirection: "column",
    flex: 8
  },
  addressText: {
    color: "grey"
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 14,
    paddingHorizontal: 3,
    paddingVertical: 3,
    backgroundColor: "#fff",
    color: "#912b04",
    fontSize: 12
  },
  buttonText: {
    color: "#0066cc",
    fontSize: 12
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4
  }
});
