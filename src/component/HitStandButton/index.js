import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, Icon} from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
/**
* 
* this is HitStandButton component 
* which are using to draw cards for player as well as dealer.
* takes input iconName, iconType and name
*/
const HitStandButton = ({onPress = () => {}, iconName, iconType, name}) => {
  return (
    <TouchableOpacity style={styles.view} onPress={onPress}>
      <Icon name={iconName} type={iconType} style={styles.icon} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

HitStandButton.propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  name: PropTypes.string,
};

HitStandButton.defaultProps = {
  iconName: '',
  iconType: '',
  name: '',
};
export default HitStandButton;
