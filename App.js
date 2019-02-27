/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import { Header } from "react-native-elements";

export default class App extends Component {
  state = {
    teamAScore: 0,
    teamBScore: 0
  };
  teamAPoints = inc => {
    if (inc === "3") {
      this.setState(function(state, props) {
        return {
          teamAScore: state.teamAScore + 3
        };
      });
    } else if (inc === "2") {
      this.setState(function(state, props) {
        return {
          teamAScore: state.teamAScore + 2
        };
      });
    } else if (inc === "1") {
      this.setState(function(state, props) {
        return {
          teamAScore: state.teamAScore + 1
        };
      });
    }
  };
  teamBPoints = inc => {
    if (inc === "3") {
      this.setState(function(state, props) {
        return {
          teamBScore: state.teamBScore + 3
        };
      });
    } else if (inc === "2") {
      this.setState(function(state, props) {
        return {
          teamBScore: state.teamBScore + 2
        };
      });
    } else if (inc === "1") {
      this.setState(function(state, props) {
        return {
          teamBScore: state.teamBScore + 1
        };
      });
    }
  };
  reset = () => {
    this.setState({
      teamAScore: 0,
      teamBScore: 0
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          barStyle="dark-content"
          containerStyle={{
            backgroundColor: "orange"
          }}
          centerComponent={{
            text: "CourtCounter",
            style: { color: "#fff", fontSize: 30, fontWeight: "bold" }
          }}
        />
        <View style={styles.firstHalf}>
          <View style={styles.teamA}>
            <Text style={styles.header}>TeamA</Text>
            <Text style={styles.score}>{this.state.teamAScore}</Text>
            <View style={styles.buttonCon}>
              <TouchableHighlight
                onPress={this.teamAPoints.bind(this, "3")}
                underlayColor="white"
                id="test"
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>+3 POINTS</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.teamAPoints.bind(this, "2")}
                underlayColor="white"
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>+2 POINTS</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.teamAPoints.bind(this, "1")}
                underlayColor="white"
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>FREE THROW</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.teamB}>
            <Text style={styles.header}>TeamB</Text>
            <Text style={styles.score}>{this.state.teamBScore}</Text>
            <View style={styles.buttonCon}>
              <TouchableHighlight
                onPress={this.teamBPoints.bind(this, "3")}
                underlayColor="white"
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>+3 POINTS</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.teamBPoints.bind(this, "2")}
                underlayColor="white"
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>+2 POINTS</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.teamBPoints.bind(this, "1")}
                underlayColor="white"
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>FREE THROW</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={styles.secondHalf}>
          <TouchableHighlight
            onPress={this.reset.bind(this)}
            underlayColor="white"
          >
            <View style={styles.buttonReset}>
              <Text style={styles.buttonText}>Reset</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  firstHalf: {
    height: "55%",
    flexDirection: "row",
    marginTop: 20
  },
  teamA: {
    flex: 1,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#ccc"
  },
  teamB: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  score: {
    marginTop: 20,
    fontSize: 100
  },
  button: {
    marginBottom: 20,

    backgroundColor: "orange",
    borderRadius: 5
  },
  buttonText: {
    padding: 12,
    color: "white"
  },
  buttonCon: {
    marginTop: 10
  },
  secondHalf: {
    flexDirection: "column",
    flex: 1,

    alignItems: "center",
    justifyContent: "flex-end"
  },

  buttonReset: {
    marginBottom: 20,
    backgroundColor: "orange",
    borderRadius: 5
  }
});
