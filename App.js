import RepContainer from './components/RepContainer.js';
import Profile from './components/Profile.js';
import HouseList from './components/HouseList.js';
import SenateList from './components/SenateList.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  RepContainer: { screen: RepContainer },
  Profile: { screen: Profile },
  SenateList: { screen: SenateList },
  HouseList: { screen: HouseList },
});

const App = createAppContainer(MainNavigator);

export default App;
