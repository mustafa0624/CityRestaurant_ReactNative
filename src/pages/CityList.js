import axios from "axios";
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import {CityItem,SearchBar} from "../components"


function CityList(props) {
    const[newCityList,setNewCityList]= useState([])
    const [cityList, setCityList] = useState([])

    const fetchCitydData = async () => {
        const { data } = await axios.get("https://opentable.herokuapp.com/api/cities")
        // console.log(data.cities)
        setCityList(data.cities)
        setNewCityList(data.cities)
    }

    useEffect(()=>{
        fetchCitydData()
    },[])

    const renderCities=({ item }) =>{
       return(
           <CityItem 
                cityName={item} 
                onSelect={()=>props.navigation.navigate("Restaurants",{selectedCity:item})} /> 

       ) 
    } 

    function searchCity(search){
        // const newArray=[...cityList]
        const filteredCity= newCityList.filter(city=>{
            const text = search.toUpperCase()
            const cityName=city.toUpperCase()
            return cityName.indexOf(text) > -1
        })
        setCityList(filteredCity)
    }

    

    return (
        <SafeAreaView>
            <View >
                <SearchBar
                placeholder="Search a City..."
                onSearch={(value)=>searchCity(value)}
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