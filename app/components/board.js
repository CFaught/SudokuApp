import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Tile from './Tile.js'


var {width, height} = require('Dimensions').get('window');
var CELL_SIZE = Math.floor(width * .1); // 10% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE = Math.floor(TILE_SIZE * .75);
var SIZE = 9; // nine-by-nine grid


export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTiles(this.props.puzzle, this.props.solved)}
      </View>
    )
  }

  renderTiles(puzzle, solved) {
    var result = [];
    for (var row = 0; row < SIZE; row++) {
      for (var col = 0; col < SIZE; col++) {
        var key = row * SIZE + col;
        var letter = puzzle[key];
        var solution = solved[key];
        var position = {
          left: col * CELL_SIZE + CELL_PADDING,
          top: row * CELL_SIZE + CELL_PADDING
        };
        result.push(this.renderTile(key, position, letter, solution));
      }
    }
    return result;
  }

  renderTile(id, position, letter, solution) {
    return (
      <Tile key={id} id={id} position={position} letter={letter} solution={solution} />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    width: CELL_SIZE * SIZE,
    height: CELL_SIZE * SIZE,
    backgroundColor: 'transparent',
  },
});

module.exports = Board;
