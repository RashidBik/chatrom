import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
    params: {lon: '38.5', lat: '-78.5'},
    headers: {
      'X-RapidAPI-Key': 'ce12e4f0b6msh42e29a4cc49a25ep1c3ae6jsn4183b480f23f',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };

export function weather() {
    
    axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}