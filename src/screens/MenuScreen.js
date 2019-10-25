import React from 'react';
import { Text,View,StyleSheet,Button,TouchableOpacity } from 'react-native';

const MenuScreen = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
        
      <Text>Menu</Text>
      <Button title={"หมวดหนัง"} onPress={() => navigation.navigate('genres')}/>
      <Button title={"ค้นหาหนัง"} onPress={() => navigation.navigate('search')}/>
      <Button title={"หนังที่ชื่นชอบ"} onPress={() => navigation.navigate('favourite')}/>

    </View>
   );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  }
});

export default MenuScreen;