const cityName = "London";
const apiKey = "04d34bd6395feacde72863bb2da2fc4b";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const windSpeed = data.wind.speed;
    console.log(`Wind speed in ${cityName} is ${windSpeed} meters per second.`);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
