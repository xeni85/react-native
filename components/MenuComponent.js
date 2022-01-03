import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

function Menu(props) {
    const renderMenuItem1 = ({item, index}) => {
        return(
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvatar={{ source: require('./images/uthappizza.png')}}
                />
        );
    }
    const renderMenuItem = ({item, index}) => {
        console.log("------Within Menu Item-----")
        return (
                <ListItem key={index} onPress={() => props.onPress(item.id)}>
                    <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                    <ListItem.Chevron>{true}</ListItem.Chevron>
                    <Avatar rounded source={require('./images/uthapizza.jfif')} />
                </ListItem.Content>
                </ListItem>
        );
    };
console.log('----wthin Flatlist----')
    return (
        <View>
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
        </View>
    );
}


export default Menu;