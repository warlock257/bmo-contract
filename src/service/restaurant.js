import axios from 'axios'

export const getRestaurantsForCity = (city, page = 1) => {
    return axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${city}&page=${page}`)
}