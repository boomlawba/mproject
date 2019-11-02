import React,{useState} from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput ,Button, TouchableOpacity } from 'react-native';
import ResultsDetail from '../component/ResultDetail';
import { withNavigation } from 'react-navigation';



 class SearchScreen extends React.Component {

   static navigationOptions = {
    title: 'Home',
  };

  gotoProfile = () => {
    const { navigation } = this.props
    navigation.navigate('search')
  }

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      movie_type: '1'
    }

  }
  static navigationOptions = {
    title: 'serch',
  };

  gotoProfile = () => {
    const { navigation } = this.props
    navigation.navigate('Profile')
  }

  click (){
    {componentDidMount()}
  }
  componentDidMount (){
    return  fetch("http://192.168.43.95:80/Movie_Project/test.php", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        movie_type: this.state.movie_type
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
   else if(this.state.movie_type != '1'){
      return(
        <View>
        <testScreen movie_type = {this.state.movie_type}/>
        </View>
      )
    }

    return(
      <View style={styles.container}>

        <TextInput 
         placeholder='search'
         onChangeText={movie_type => this.setState({movie_type})}
        />
          
        <Button
         title="TEST"
         onPress={() => navigate ('serach')}
         />
        
        <Text>{this.state.movie_type}</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View> 
           <TouchableOpacity
                onPress = {() => 
                navigate('Detail',{id: item.id})}
            >
              <ResultsDetail result = {item}/>
              <Text style = {styles.textStyle}>
               {item.name}
              </Text>

              </TouchableOpacity>
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

export default withNavigation(SearchScreen) ;