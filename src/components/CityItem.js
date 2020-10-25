import React from "react";
import {TouchableOpacity,Text, StyleSheet} from "react-native"


const CityItem = (props) =>{
    return(
        <TouchableOpacity
        onPress={props.onSelect}
        style={styles.container}>
            <Text style={styles.text}>{props.cityName}</Text>
        </TouchableOpacity>
    )
}


const styles =StyleSheet.create({
    container:{
        backgroundColor:"#b2dfdb",
        margin:2,
        borderRadius:10,
        padding:5,
        
        alignItems:"center"
    },
    text:{
        fontSize:15
    }
})

export {CityItem}