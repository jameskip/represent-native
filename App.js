import RepContainer from './RepContainer.js'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const MainNavigator = createStackNavigator({
  List: { screen: RepContainer }
  // Profile: { screen: Profile }
})

const App = createAppContainer(MainNavigator)

export default App
