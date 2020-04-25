import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {View, FlatList, Image} from 'react-native';
import CardItem from '../CardItem';
/**
 * 
 * this is CardList component 
 * which is using for card list and takes i/p card list 
 */
const CardList = ({cardList}) => {
  return (
    <View
      style={styles.view}>
      <FlatList
        data={cardList}
        horizontal={true}
        renderItem={({item}) =><CardItem image={item.IMAGE}/>}
      />
    </View>
  );
};

CardList.propTypes = {
  dealerCards: PropTypes.array,
};

CardList.defaultProps = {
  dealerCards: [],
};
export default CardList;
