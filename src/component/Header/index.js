import React from 'react';
import PropTypes from 'prop-types';
import {Body, Header, Left, Title, Right, Text} from 'native-base';
import {back} from '../../util/IconsList';
import styles from './styles';
import locales from '../../util/locales';
import StatusBar from '../StatusBar';
import Colors from '../../util/Colors';
import {TouchableOpacity} from 'react-native';
/**
 * 
 * this is header component 
 * which is using to show title on header, also having exit, Restart Game and  
 * stop button 
 * exit button=> exit from the app
 * restart game => if you want to restart game
 * stop game=> if you want to stop game
 */
const MyHeader = ({
  onPressExit = () => {},
  title,
  onPressStopRestartGame = () => {},
  counter,
  winner,
}) => {
  return (
    <Header androidStatusBarColor={Colors.statusBar} style={styles.header}>
      <StatusBar />
      <Left>
        <TouchableOpacity style={styles.exitView} onPress={onPressExit}>
          <Text style={styles.exit}>{locales.Exit}</Text>
        </TouchableOpacity>
      </Left>
      <Body>
        <Title style={styles.title}>{title}</Title>
      </Body>
      <Right>
        {counter === 0 ? null : (
          <TouchableOpacity
            style={styles.stopRestartView}
            onPress={onPressStopRestartGame}>
            <Text style={styles.stopRestart}>
              {winner === '' ? locales.StopGame : locales.RestartGame}
            </Text>
          </TouchableOpacity>
        )}
      </Right>
    </Header>
  );
};

MyHeader.prototype = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  counter: PropTypes.number,
  winning: PropTypes.string,
};

MyHeader.defaultProps = {
  title: locales.home,
  counter: 0,
  winning: '',
};

export default MyHeader;
