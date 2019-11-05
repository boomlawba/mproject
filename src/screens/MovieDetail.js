import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image,Linking} from 'react-native';
import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResultsDetail = ({ navigation }) => {

    const name = navigation.getParam('name');
    const image = navigation.getParam('image');
    const length = navigation.getParam('length');
    const rate = navigation.getParam('rate');
    const directer = navigation.getParam('directer');
    const trailer = navigation.getParam('trailer');
    const movie = navigation.getParam('movie');
    

   
    console.log('save'+image);
    

    

    return (
 <View style={styles.container}>   
 <Text style = {styles.textstyle} >Moive Detail</Text> 
    <View style = {styles.mainview}>   
        
            <View>
            <Image style={styles.image} source={{ uri:image}}/>
            </View >

             <View style = {styles.detailstyle}>
                  <Text style = {styles.name}>{name}</Text>
                  <Text >ความยาวหนัง : {length} </Text>
                  <Text >rating {rate} /10  </Text>
                  <Text>ผู้กำกับ: <Text  style = {styles.textstyle2}> {directer} </Text> </Text>
 
              </View>

        
    </View>
    <View style = {styles.viewclickstyle}>

         <View >
                <TouchableOpacity onPress={ ()=>{ Linking.openURL(trailer)}}>
                  <Text style = {styles.clicktextstyle1}>
                  Trailer
                  </Text> 
                </TouchableOpacity>
         </View>

         <View > 
                <TouchableOpacity onPress={ ()=>{ Linking.openURL(movie)}}>
                  <Text style = {styles.clicktextstyle2}>
                    Watch Movie
                  </Text>
                </TouchableOpacity>
         </View>
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
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      detailstyle: {
        marginLeft: 15,
        backgroundColor: 'grey'
      },
      mainview: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      viewclickstyle: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 100,

      },
      textstyle: {
          color: 'white',
          fontSize: 30,
          alignItems: 'center',
          marginTop: 100,
          marginBottom: 80,
      },
      textstyle2: {
        color: 'red',
        
    },
      clicktextstyle1: {
        marginRight:10,
        color: 'white',
        fontSize: 20,
        alignItems: 'center',
        
    },
    clicktextstyle2: {
      marginLeft:10,
      color: 'white',
      fontSize: 20,
      alignItems: 'center',
      
  }
  
    
});

export default ResultsDetail;