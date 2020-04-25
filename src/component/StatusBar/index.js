import React from "react";
import { StatusBar } from "react-native";
import Colors from "../../util/Colors";
/**
* this is StatusBar component 
* used to show status bar color
*/
const statusBar = ({}) => {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor={Colors.statusBar}
    />
  );
};
statusBar.propTypes = {};
statusBar.defaultProps = {};
export default statusBar;
