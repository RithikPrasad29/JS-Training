export default async function getWindSpeed(cityName, apiKey) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const windSpeed = data.wind.speed;
    console.log(`Wind speed in ${cityName} is ${windSpeed} meters per second.`);
    return windSpeed.toString(); 
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return '0'; 
  }
}
