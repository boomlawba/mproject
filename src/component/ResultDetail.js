import React from 'react';
import { View, Text, StyleSheet,Image,ScrollView, TouchableOpacity } from 'react-native';


const ResultDetail = ({ result, navigation }) => {
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
        marginLeft : 10,
      },
    
});

export default ResultDetail;