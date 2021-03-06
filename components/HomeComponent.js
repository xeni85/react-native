import React, {Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function RenderItem(props) {
    const item = props.item
    
    if (item != null) {
        return (
            <View>
            <Card>
            <Card.FeaturedTitle>{item.name}</Card.FeaturedTitle>
            <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
            <Card.Image source={require('./images/uthapizza.jfif')} />
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
            </View>
        )
    } else {
        return (<View></View>)
    }
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return(
            <ScrollView>
                <RenderItem
                    item={this.state.dishes.filter((dish) => dish.featured)[0]}
                    />
                <RenderItem
                    item={this.state.promotions.filter((promo) => promo.featured)[0]}
                    />
                <RenderItem
                    item={this.state.leaders.filter((leader) => leader.featured)[0]}
                    />
            </ScrollView>
            )
    }
}

export default Home;