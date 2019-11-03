import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native';
import Video from 'react-native-video';

const ResultsDetail = ({ navigation }) => {

    const name = navigation.getParam('name');
    const image = navigation.getParam('image');
    const length = navigation.getParam('length');
    

   
    console.log('save'+image);
    

    

    return (
    <View style={styles.container}>
       
        
            <View>
            <Image style={styles.image} source={{ uri:image}}/>
            </View >

             <View style = {styles.detailstyle}>
                  <Text style = {styles.name}>{name}</Text>
                  <Text >ความยาวหนัง : {length}</Text>
                  </View>
            
             

        
    </View>
    )
};
const styles = StyleSheet.create({
    
    image:{
        width: 200,
        height: 300,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontSize: 20,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 10,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      detailstyle: {
        marginLeft: 15,
        backgroundColor: 'grey'
      },
    
});

export default ResultsDetail;