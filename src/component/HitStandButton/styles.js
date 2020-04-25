import {StyleSheet} from "react-native"
import Colors from "../../util/Colors"
const styles=StyleSheet.create({
view:{
    backgroundColor: Colors.button,
    justifyContent: 'center',
    width: 120,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
},
icon:{
    color: Colors.white,
    fontSize: 30
},
text:{
    color: Colors.white,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
}
})

export default styles