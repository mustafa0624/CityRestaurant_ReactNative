import React from "react";
import {TextInput,View, StyleSheet} from "react-native"



const SearchBar=(props)=>{
    return(
        <View style={styles.container}> 
            <TextInput
            placeholder={props.placeholder}
            onChangeText={text=> props.onSearch(text)}
            />
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:"#cfd8dc",
        margin:2,
        borderRadius:10,
        // alignItems:"center"
        
        
    }
})
export {SearchBar}