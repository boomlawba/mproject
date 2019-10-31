import React from 'react';
import { Text,View,StyleSheet,Button,TouchableOpacity } from 'react-native';


const MenuScreen = ({navigation}) => {
 
  return (
    <View style={styles.container}>
        
      <Text style = {styles.titleStyle}>Menu</Text>

      <TouchableOpacity  onPress={() => navigation.navigate('genres')}>
        <Text style = {styles.menuStyle}>
          หมวดหนัง
          </Text>
        </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('search')}>
        <Text style = {styles.menuStyle}>
          ค้นหาหนัง
          </Text>
        </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('favourite')}>
        <Text style = {styles.menuStyle}>
          หนังที่ชื่นชอบ
          </Text>
        </TouchableOpacity>
        
        

    </View>
   );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 40,
    color: 'blue',
    marginBottom: 30
  },
  menuStyle: {
    fontSize: 25,
    color: 'red'
    
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});

export default MenuScreen;