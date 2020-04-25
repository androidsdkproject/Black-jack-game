import { StyleSheet } from "react-native";
import CommonSize from "../../util/CommonSize";
const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: CommonSize.button,
    fontWeight: "bold"
  },
  buttonStyle: {
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    paddingTop: 8,
    marginBottom: 5,
    alignItems: "center",
    marginTop: 5,
    borderRadius: 5,
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 5,
    elevation: 2
  }
});
export default styles;
