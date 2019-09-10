import React, { Component } from "react";
import { Text } from "react-native";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      curTime: ""
    };

    setInterval(() => {
      this.setState({
        showText: !this.state.showText,
        curTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : "";
    return (
      <Text>
        {display}
        {this.state.curTime}
      </Text>
    );
  }
}

export default Hello;
