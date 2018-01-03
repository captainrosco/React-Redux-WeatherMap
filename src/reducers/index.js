import { combineReducers } from 'redux';
import ReduceWeather from './reducer_weather';

const rootReducer = combineReducers({
  weather: ReduceWeather
});

export default rootReducer;
