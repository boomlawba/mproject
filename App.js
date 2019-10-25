import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FirstScreen from './src/screens/FirstScreen';
import MenuScreen from './src/screens/MenuScreen';
import GenresScreen from './src/screens/GenresScreen';
import MovieScreen from './src/screens/MovieScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator (
  {
    first: FirstScreen,
    menu: MenuScreen,
    genres: GenresScreen,
    movie: MovieScreen,
    favourite: FavouriteScreen,
    search: SearchScreen
  },
  {
    initialRouteName: 'first',
    defaultNavigationOptions:
    {
     
    }
  }

);
export default createAppContainer(navigator);
