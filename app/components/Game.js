import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import InputButton from './InputButton';

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
      input: '',
    }
  }

  onCheck() {
    this.setState({ solved: !this.state.solved });
  }

  renderButtons() {
    var result = [];
    for (var i = 0; i < 9; i++) {
      result.push(
        <InputButton key={i + 1} id={i + 1} text={i + 1} />
      );
    }
    return result;
  }

  render() {
    return (

      <View style={styles.outerContainer}>
        <View>
          <View style={styles.container}>
            <Board puzzle={this.state.solved ? this.state.solve : this.state.puzzle}
                   solved={this.state.solve}
                   input={this.state.input}
            />
          </View>

          <TouchableHighlight
            onPress={this.onCheck.bind(this)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Check</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.props.quit}
            style={[styles.button, styles.cancelButton]}
          >
            <Text style={styles.buttonText}>Quit</Text>
          </TouchableHighlight>

        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.list}>
            {this.renderButtons()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
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
    backgroundColor: '#53d694',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#777',
  },
  buttonContainer: {
    flex: 1,
    // left: 0, // https://github.com/facebook/react-native/issues/1332
    backgroundColor: 'white',
    paddingTop: 5,
  },
  list: {
    flex: 1,

    // HERE ARE THE STYLES
    // IF YOU REMOVE EITHER OF THESE, THINGS WORK AGAIN
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
