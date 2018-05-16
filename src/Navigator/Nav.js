import {createStackNavigator} from 'react-navigation';
import Screen1 from '../Page/Screen1';
import Screen2 from '../Page/Screen2';

const RootStack = createStackNavigator(
    {
      Home: Screen1,
      Details: Screen2,
    },
    {
      initialRouteName: 'Home',
      /* The header config from HomeScreen is now here */
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );


export default RootStack;