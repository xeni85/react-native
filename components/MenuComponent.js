import React, {Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetail';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };
    
    render() {
        // const { navigate } = this.props.navigation.navigate;
        
        const RenderMenuItem = ({item, index }) => {
            console.log("------Within Menu Item-----")
            return (
                    <ListItem key={index} onPress={() => this.props.navigation.navigate('Dish Details', {dishId: item.id})}>
                        <Avatar rounded source={require('./images/uthapizza.jfif')} />
                        <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
            );
        };
        console.log('----wthin Flatlist----')
        return (
            <View>
                <FlatList 
                    data={this.state.dishes}
                    renderItem={RenderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    />
            </View>
        );
    }
    
}


export default Menu;