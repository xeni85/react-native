import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Home from './HomeComponent';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

//--------------Stack Navigator--------
const MenuNavigator = () => {

return (

<Stack.Navigator 
initialRouteName='Menu'
screenOptions={{
headerMode: 'screen',
headerTintColor: '#fff',
headerStyle: {
    backgroundColor: '512DA8'
},
headerTitleStyle: {
    color: '#fff'
}
}}>
<Stack.Screen name='Menu' component={Menu} />
<Stack.Screen name='Dish Details' component={DishDetail} />
</Stack.Navigator>
)};


//-----------Stack Navigator---------

const HomeNavigator = () =>{
return (
    <Stack.Navigator 
    initialRouteName='Home'
    screenOptions={{
    headerMode: 'screen',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '512DA8'
    },
    headerTitleStyle: {
        color: '#fff'
    }
}}>
    <Stack.Screen name='Home' component={Home} />
</Stack.Navigator>
)};

//-------Draw Navigator-------

const MainNavigator = 

<NavigationContainer>
<Drawer.Navigator initialRouteName='Home'>
<Drawer.Screen name='Home' component={HomeNavigator} />
<Drawer.Screen name='Menu' component={MenuNavigator} />
</Drawer.Navigator>
</NavigationContainer>

//Main Class
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
      this.setState({selectedDish: dishId});
  }


  render() {
    console.log("----Within Main render-----")
    return (
        MainNavigator
    );
  }
}

// draw navigator

export default Main;