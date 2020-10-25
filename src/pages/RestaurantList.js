import React, { useEffect, useState } from 'react';
import axios from "axios"
import { View, Text, SafeAreaView ,FlatList} from 'react-native';
import { RestaurantItem } from '../components';



function RestaurantList(props) {
    const [restaurantList,setRestaurantList] = useState([])
    const {selectedCity} = props.route.params
    
    const fetchRestaurants = () => {
        axios.get(
            'http://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    city: selectedCity
                }
            })
            .then(response => {
                setRestaurantList(response.data.restaurants);
            })
    }
    useEffect(()=>{
        fetchRestaurants()
    },[])

    const renderRestaurants = ({ item }) => {
        return (
            <RestaurantItem
                restaurant={item}
            />
        )
    }

    return (
        <SafeAreaView>
            <View >
                <Text>{selectedCity}</Text>
                <FlatList
                    data={restaurantList}
                    renderItem={renderRestaurants}
                />
            </View>
        </SafeAreaView>
    );
}

export {RestaurantList}