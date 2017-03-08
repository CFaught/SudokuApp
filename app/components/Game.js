import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

var Board = require('./Board.js');
var {width, height} = require('Dimensions').get('window');

var sudoku = require('../sudoku.js');
var puzzle = sudoku.makepuzzle();
var solved = sudoku.solvepuzzle(puzzle);


export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      puzzle: puzzle,
      solve: solved,
      solved: false,
    }
  }

  onSolve() {
    this.setState({ solved: !this.state.solved });
  }

  render() {
    return (

      <View>
        <View style={styles.container}>
          <Board puzzle={this.state.solved ? this.state.solve : this.state.puzzle}
                 solved={this.state.solve}
          />
        </View>

        <TouchableHighlight
          onPress={this.onSolve.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Solve</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.props.quit}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>Quit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: (width * 0.025),
    marginTop: 20,
    borderRadius: 2,
    backgroundColor: '#53d694',
    width: width - (width * 0.05),
    height: width - (width * 0.05),
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA',
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#777',
  },
});
