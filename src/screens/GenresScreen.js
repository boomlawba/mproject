import React, { useState } from 'react';
import { Text,View,StyleSheet,Button,TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { withNavigation } from 'react-navigation';


const GenresScreen = ({navigation}) => {
  const [type, settype] = useState('');

  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  animeMenu = () => {
    navigation.navigate('anime',{Type:type})
    settype('1');
    this._menu.hide();
  };

  comadyMenu = () => {
    navigation.navigate('comady',{Type:type})
    settype('2');
    this._menu.hide();
  };

  serieMenu = () => {
    navigation.navigate('serie',{Type:type})
    settype('3');
    this._menu.hide();
  };

  actionMenu = () => {
    settype('4');
    navigation.navigate('action',{Type:type})
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };

  return (
    <View style={styles.container}>
        
      <Text style = {styles.textStyle}>หมวดหนัง {type}</Text>

      <Menu
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu}>Choose</Text>}
        ><MenuItem disabled>Choose</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.animeMenu}>Anime</MenuItem>
          <MenuItem onPress={this.comadyMenu}>Comady</MenuItem>
          <MenuItem onPress={this.serieMenu} > Serie</MenuItem>
          
          <MenuItem onPress={this.actionMenu}>Action</MenuItem>
        </Menu>

    </View>
   );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginBottom: 200,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default withNavigation(GenresScreen);