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
      <View key={index} style={styles.cafeItem}>
        <View style={styles.cafeInfo}>
          <Text>{place.name}</Text>
          <Text style={styles.cafeAddress}>{place.address}</Text>
        </View>
        <View style={styles.cafeGetInfo}>
          <TouchableOpacity onPress={this.onPress} style={styles.button}>
            <Text style={styles.buttonText}>Info</Text>
          </TouchableOpacity>
        </View>
        {showInfo && (
          <View>
            <Text>Show Info</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50
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
  }
});
