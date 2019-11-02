import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native';

const ResultsDetail = ({ navigation }) => {

    const id = navigation.getParam('id');
    const [result, setResult]= useState([null]);
    const [saveid, setsaveid]= useState([id]);
    console.log('id'+id);
    console.log('save'+saveid);
    

    const getResult =  id => {
        fetch("http://192.168.43.95:80/Movie_Project/selectDetail.php", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          
        id: {id}
      })
  })

      .then((response) => response.json())
      .then((responseJson) => {
          setResult(responseJson);
       
         console.log(responseJson);
        }, function(){
          
        })

    
      .catch((error) =>{
        console.error(error);
          
      })
      .done();
        
    }

    useEffect(() => {
        getResult(id);
    },[]);

    console.log(result)
    if (!result){
        return null;
    }

    return (
    <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator='false'>
             <Image style={styles.image} source={{ uri: result.image_url}}/>

        </ScrollView>
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
        fontSize: 16,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
    
});

export default ResultsDetail;