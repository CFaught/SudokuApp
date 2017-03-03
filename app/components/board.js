import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';


var {width, height} = require('Dimensions').get('window');
var SIZE = 9; // nine-by-nine grid
var CELL_SIZE = Math.floor(width * .1); // 10% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE = Math.floor(TILE_SIZE * .75);

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTiles(this.props.puzzle)}
      </View>
    )
  }

  clickTile(id) {
    console.log(this.props.puzzle[id] + " " + this.props.solved[id]);
  }

  renderTiles(puzzle) {
    var result = [];
    for (var row = 0; row < SIZE; row++) {
      for (var col = 0; col < SIZE; col++) {
        var key = row * SIZE + col;
        var letter = puzzle[key];
        var position = {
          left: col * CELL_SIZE + CELL_PADDING,
          top: row * CELL_SIZE + CELL_PADDING
        };
        result.push(this.renderTile(key, position, letter));
      }
    }
    return result;
  }

  renderTile(id, position, letter) {
    return (
       <TouchableHighlight key={id}
            underlayColor="#05A5D1"
             style={[styles.tile, position ]}
             onPress={() => this.clickTile(id)}
       >
         <Text style={styles.letter}>{letter}</Text>
       </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    width: CELL_SIZE * SIZE,
    height: CELL_SIZE * SIZE,
    backgroundColor: 'transparent',
  },
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

module.exports = Board;
