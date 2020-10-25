import axios from "axios";
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import {CityItem,SearchBar} from "../components"


function CityList(props) {

    const [cityList, setCityList] = useState([])

    const fetchCitydData = async () => {
        const { data } = await axios.get("https://opentable.herokuapp.com/api/cities")
        // console.log(data.cities)
        setCityList(data.cities)
    }

    useEffect(()=>{
        fetchCitydData()
    },[])

    const renderCities=({ item }) => <CityItem cityName={item}/> 

    // function searchCity(search){
    //     const filteredCity=
    // }

    

    return (
        <SafeAreaView>
            <View >
                <SearchBar
                placeholder="bir sehir arayin..."
                onSearch={(value)=>console.log(value)}
                />
                <FlatList
                    keyExtractor={(_,index)=>index.toString()}
                    data={cityList}
                    renderItem={renderCities}
                    // ItemSeparatorComponent={}   her item arasina cizgi yada baska bisey eklemek istersem eger
                />
            </View>
        </SafeAreaView>
    );
}

export { CityList }