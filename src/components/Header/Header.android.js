import React, { Component } from "react";
import { Text } from "react-native";

import HeaderStyle from "styles/HeaderStyle";

class Header extends Component {
  render() {
    return <Text style={HeaderStyle.header}>Kharkiv Restaurant List</Text>;
  }
}

export default Header;
