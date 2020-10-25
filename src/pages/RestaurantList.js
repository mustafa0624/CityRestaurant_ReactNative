import React, { useEffect, useState } from 'react';
import axios from "axios"
import { View, Text, SafeAreaView ,FlatList} from 'react-native';
import { RestaurantItem, SearchBar } from '../components';

let originalList=[]

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
                originalList=[...response.data.restaurants]
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


    function searchRestaurant(search){
        const filteredRestaurants= originalList.filter(restaurant=>{
            const text =search.toUpperCase();
            const restaurantName = restaurant.name.toUpperCase();
            
            return restaurantName.indexOf(text) > -1
        })
        setRestaurantList(filteredRestaurants)
    }

    return (
        <SafeAreaView style={{flex:1}} >
            <View  style={{flex:1}}>
                <Text style={{fontSize:20,margin:10,fontWeight:"bold"}}>{selectedCity}</Text>
                <SearchBar
                placeholder="search a restaurant"
                onSearch = {(value)=> searchRestaurant(value)}
                />
                <FlatList
                    data={restaurantList}
                    renderItem={renderRestaurants}
                />
            </View>
        </SafeAreaView>
    );
}

export {RestaurantList}