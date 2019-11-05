import React from 'react';
import { Text,View,StyleSheet,Linking ,TouchableOpacity } from 'react-native';


const MenuScreen = ({navigation}) => {
 
  return (
    <View style={styles.container}>

      <Text style = {styles.titleStyle}>Menu</Text>
      <View>
    <View>
      <TouchableOpacity  onPress={() => navigation.navigate('genres')}>
        <Text style = {styles.menuStyle}>
         - หมวดหนัง
          </Text>
        </TouchableOpacity>
        </View>

      <View>
      <TouchableOpacity  onPress={() => navigation.navigate('search')}>
        <Text style = {styles.menuStyle}>
         - รายชื่อหนังทั้งหมด 
          </Text>
        </TouchableOpacity>
        </View>
    
      <View>
        </View>
        
        
        </View>
    </View>
   );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 40,
    color: 'red',
    marginBottom: 30,
    marginTop: 100,
    
  },
  menuStyle: {
    fontSize: 25,
    color: 'blue'
    
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
  },
 
});

export default MenuScreen;