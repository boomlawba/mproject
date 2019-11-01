import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput ,Button } from 'react-native';
import ResultsDetail from '../component/ResultDetail';


export default class SearchScreen extends React.Component {


  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
     
    }

  }
 
  gotoProfile = () => {
    const { navigation } = this.props
    navigation.navigate('Profile')
  }

 
  componentDidMount (){
    return  fetch("http://192.168.43.95:80/Movie_Project/test.php", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        movie_type: this.props.movie_type
      })
  })

      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false, 
          dataSource: responseJson,
         
        }, function(){
          console.log(responseJson);
        });

      })
      .catch((error) =>{
        console.error(error);
          
      })
      .done();
}



  render(){

    const {navigate} = this.props.navigation;
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>

        <TextInput 
         placeholder='search'
         onChangeText={movie_type => this.setState({movie_type})}
        />
          <Text>{this.props.movie_type}</Text>
        <Button
         title="TEST"
         onPress={() => navigate('search')}
         />
        <Text>{this.state.movie_type}</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View> 
              <ResultsDetail result = {item}/>
              <Text style = {styles.textStyle}>
               {item.name}
              </Text>
          </View>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    
   
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      textStyle:{
          marginLeft: 5
      }
      
});
