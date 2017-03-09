import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var {width, height} = require('Dimensions').get('window');
var CELL_SIZE = Math.floor(width * .1); // 10% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE = Math.floor(TILE_SIZE * .75);


export default class Tile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selected: false,
      letter: this.props.letter,
    }
  }

  // In order to listen for props changes from parents
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.letter !== this.state.letter) {
      this.setState({ letter: nextProps.letter });
    }
  }

  clickTile(id) {
    console.log(this.state.selected = true);
    this.setState({letter: this.props.solution});
  }

  render() {
    return (
      <TouchableHighlight key={this.props.id}
           underlayColor="#05A5D1"
            style={[styles.tile, this.props.position ]}
            onPress={() => this.clickTile(this.props.id)}
      >
        <Text style={styles.letter}>{this.state.letter}</Text>
      </TouchableHighlight>
    )
  }
}
  var styles = StyleSheet.create({
    tile: {
      position: 'absolute',
      width: TILE_SIZE,
      height: TILE_SIZE,
      borderRadius: BORDER_RADIUS,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#BEE1D2',
    },
    letter: {
      color: '#333',
      fontSize: LETTER_SIZE,
      backgroundColor: 'transparent',
      fontFamily: 'Helvetica-Bold'
    },
  });
