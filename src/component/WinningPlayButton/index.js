import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Col} from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import Colors from '../../util/Colors';
import locales from '../../util/locales';
/**
* this is WinningPlayButton component 
* used to show information of winner or lost.
* takes i/p winner,counter and isStartGame 
*/
const WinningPlayButton = ({
  winner,
  counter,
  isStartGame,
  onPress = () => {},
}) => {
  return (
    <View style={styles.container}>
      {winner === '' ? (
        isStartGame ? (
          counter >= 5 ? (
            <Text style={styles.winningAmount}>{locales.winningAmount}</Text>
          ) : (
            <Text style={styles.countdown}>
              {locales.CountDown} {counter} Seconds(s)
            </Text>
          )
        ) : (
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.startGame}>{locales.Start_Game}</Text>
          </TouchableOpacity>
        )
      ) : (
        <Text
          style={[
            styles.winner,
            {
              backgroundColor: winner === 'PLAYER' ? Colors.button : Colors.red,
            },
          ]}>
          {winner === 'PLAYER' ? 'You win' : 'You Loss'}
        </Text>
      )}
    </View>
  );
};

WinningPlayButton.propTypes = {
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  buttonStyle: PropTypes.style,
};

WinningPlayButton.defaultProps = {
  buttonText: 'Submit',
  buttonColor: 'black',
  textColor: 'white',
};
export default WinningPlayButton;
