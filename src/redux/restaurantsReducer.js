import {getRestaurantsForCity} from '../service/restaurant'

const initialState = {
    isLoading:false,
    city: "Toronto",
    restaurants: []
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'getRestaurants_start':
        return {
          ...state,
          isLoading: true
        };
      case 'getRestaurants_success':
        return {
          ...state,
          restaurants: action.data.restaurants,
          isLoading: false
        };
      case 'updateCity':
        return {
          ...state,
          city: action.data
        };
      default:
        return state;
    }
  };

  export const getRestaurantsAction = (city, page) => {
    return (dispatch) => {
      dispatch({ type: 'getRestaurants_start' });
      getRestaurantsForCity(city, page)
        .then((res) => {
          dispatch({ type: 'updateCity', data: city });
          dispatch({ type: 'getRestaurants_success', data: res.data });
        })
        .catch(() => {
          console.log("API Error")
        });
    };
  };