import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';
import ResultsDetail from '../../component/ResultDetail';

export default class serieScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.43.95:80/Movie_Project/type3.php')
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
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
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
