import React from 'react';
import PropTypes from 'prop-types';
import {View,Image} from "react-native"
import styles from "./styles"
/**
 * 
 * this is Card Item component 
 * which takes i/p image and its show card image 100*100 size
 */
const CardItem = ({image}) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={image}
        resizeMode={'contain'}
      />
    </View>
  );
};

CardItem.propTypes = {
  image: PropTypes.string,
};

CardItem.defaultProps = {
  image: '',
};
export default CardItem;
