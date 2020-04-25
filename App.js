import React, { Component } from "react";
import MyNavigator from "./src/MyNavigator";
console.reportErrorsAsExceptions = false;
console.disableYellowBox = true; ///this is use for disable yellow box warnings
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./src/Redux/Reducer";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MyNavigator/>
            </Provider>
        );
    }

}
