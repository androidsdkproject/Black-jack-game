import {StyleSheet} from 'react-native';
import Colors from '../../util/Colors';
import CommonSize from '../../util/CommonSize';
const styles = StyleSheet.create({

  title: {
    fontSize: CommonSize.headerTitle,
    fontWeight: 'bold',
    color: Colors.headerTitle,
    backgroundColor: Colors.header,
    width: '100%',
  },
  header: {
    backgroundColor: Colors.header,
  },

  exitView:{
    borderRadius: 4,
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 120, 
  },
  exit:{
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  stopRestartView:{
    borderRadius: 4,
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 120,
  },
  stopRestart:{
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  }
});
export default styles;
