import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class InputButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handlePress() {
    console.log(this.props.id)
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.row}
        onPress={this.handlePress.bind(this)}
      >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#53d694',
    margin: 3,
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
