import React from "react";
import { View } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import StatusBar from "../component/StatusBar";
import dashboard from "../Dashboard";

/**
* this is root stack component 
*/

const MainNavigator = createStackNavigator({
    dashboard: {
        screen: dashboard,
        navigationOptions: () => ({
            headerShown: false
        })
      }
});
const App = createAppContainer(MainNavigator);
export default class MyNavigator extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar />
                <App
                    ref={nav => {
                        this.navigator = nav;
                    }}
                />
            </View>
        );
    }
}
