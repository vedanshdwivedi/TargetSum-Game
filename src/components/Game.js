import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class Game extends Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
  };
  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(() => {
    return 1 + Math.floor(10 * Math.random());
  });
  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, element) => acc + element, 0);
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.target}>{this.target}</Text>
          <View style={styles.buttonWrapper}>
            {this.randomNumbers.map((x, index) => {
              return (
                <Text style={styles.button} key={index}>
                  {x}
                </Text>
              );
            })}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    paddingTop: 30,
  },
  target: {
    backgroundColor: '#aaa',
    textAlign: 'center',
    fontSize: 40,
    marginHorizontal: 50,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 20,
    marginHorizontal: 60,
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#bbb',
  },
});
