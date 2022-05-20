import React, {useContext} from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog-Book",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    // refer to BlogProvider component > We wrap whole app
    // with a Provider component that holds our Globle State
    // and will directly pass the state to any level of children
    <Provider>
      <App />
    </Provider>
  );
};
