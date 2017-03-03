import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Navigator,
  StyleSheet,
} from 'react-native';
import Game from './components/Game.js';

export default class SudokuApp extends Component {
  constructor(props, context) {
      super(props, context);
  }

  newGame() {
    this.nav.push({
      name: 'newGame',
    });
  }

  quit() {
    this.nav.pop();
  }

  renderScene(route, nav) {
      switch (route.name) {
      case 'newGame':
          return (
            <Game quit={this.quit.bind(this)}/>
          );
      default:
          return (
          <View style={styles.container}>
            <TouchableHighlight
                  onPress={this.newGame.bind(this)}
                  style={styles.button}
            >
              <Text style={styles.buttonText}>New Game</Text>
            </TouchableHighlight>
          </View>
        );
      }
  }

  configureScene() {
      return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
      return (
        <Navigator
            configureScene={this.configureScene}
            initialRoute={{ name: 'landing', index: 0 }}
            ref={(nav) => { this.nav = nav;}}
            renderScene={this.renderScene.bind(this)}
        />
      );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#05A5D1',
    margin: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
});
