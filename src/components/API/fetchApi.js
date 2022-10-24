const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce12e4f0b6msh42e29a4cc49a25ep1c3ae6jsn4183b480f23f',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

export default options;

// fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&units=metric&lang=en', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));