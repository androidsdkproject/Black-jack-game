import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'native-base';
import {Text} from 'react-native';
import locales from '../../util/locales';
import styles from './styles';
/**
* this is Player component 
*used to show player information and his score
*/
const Player = ({isPlayer, score}) => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: isPlayer ? 'flex-end' : 'flex-start',
        },
      ]}>
      <View style={styles.scoreView}>
        <Text style={styles.score}>{score}</Text>
      </View>
      <Text style={styles.player}>
        {isPlayer ? locales.Player : locales.Dealer}
      </Text>
    </View>
  );
};

Player.prototype = {
  name: PropTypes.string,
  source: PropTypes.string,
};

Player.defaultProps = {
  name: '',
  source: '',
};

export default Player;
