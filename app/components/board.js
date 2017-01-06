import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


var sudoku = require('../sudoku.js');

var puzzle = sudoku.makepuzzle();
var puzzleStr = printboard(puzzle);

function printboard(board) {
	var out = '';

	for (var row = 0; row < 9; row++) {
		for (var col = 0; col < 9; col++) {
			out += [""," "," "," | "," "," "," | "," "," "][col];
      		out += printcode(board[sudoku.posfor(row, col)]);
		}
		out += ['\n','\n','\n\n','\n','\n','\n\n','\n','\n','\n'][row];
	}

	return out;
}

function printcode(n) {
	if (n == null) {
		return '._';
	}

	return n + 1 + '';
}

export default class Board extends Component {
  render() {
    return (
      <View>
        <Text>
          {puzzleStr}
        </Text>
      </View>
    )
  }
}

module.exports = Board;
