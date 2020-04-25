import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
/**
 * 
 * this is button component 
 * which takes i/p buttonText,buttonColor,textColor and buttonStyle
 */
const Button = ({
  buttonText,
  buttonColor,
  textColor,
  onPress = () => {},
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      style={[{backgroundColor: buttonColor}, styles.buttonStyle]}
      onPress={onPress}>
      <Text style={[{color: textColor}, styles.buttonTextStyle, buttonStyle]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  buttonStyle: PropTypes.style,
};

Button.defaultProps = {
  buttonText: 'Submit',
  buttonColor: 'black',
  textColor: 'white',
};
export default Button;
