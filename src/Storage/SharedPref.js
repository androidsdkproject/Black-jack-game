import {AsyncStorage} from 'react-native';
/**
* saveData => to save the data in async storage
* getData => to get the data in async storage
*/
export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(
      key,
      value != undefined && value != null ? value : '',
    );
  } catch (error) {}
};

callback = (value) => {
  return value;
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != undefined && value != null ? value : '';
  } catch (error) {
    return '';
  }
};
