import React, {Component } from 'react';
import {View, Text, FlatList } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

const RenderLeaderItem = ({item, index }) =>{
    console.log("------Within Menu Item-----")
    return (
            <ListItem key={index}>
                <Avatar rounded source={require('./images/uthapizza.jfif')} />
                <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
    );
console.log('----wthin Flatlist----')


};


const RenderAbout = () => {
    return(
            <Card>
                <Card.Title>Our History</Card.Title>
                <Card.Divider />
                <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

                      The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                </Text>
            </Card>
    )
}

class About extends Component {

        constructor(props) {
            super(props);
            this.state = {
                leaders: LEADERS
            };
        }


    render() {
        
        return(
        <View>
            <RenderAbout />
            <Card>
            <FlatList 
                data={this.state.leaders}
                renderItem={RenderLeaderItem}
                keyExtractor={item => item.id.toString()}
                />
            </Card>
        </View>
           
        )
    }
}

export default About;