import { strictEqual, throws } from 'assert';
import getWindSpeed from '../app/windSpeed.js'; 
import { assert } from 'console';

describe('getWindSpeed function', () => {
  it('should return wind speed for a valid city', function (done) {
    this.timeout(5000); 
    const cityName = "London";
    const apiKey = "04d34bd6395feacde72863bb2da2fc4b";
    getWindSpeed(cityName, apiKey)
      .then(result => {
        strictEqual(typeof result, 'string');
        done(); 
      })
      .catch(error => done(error)); 
  });


  it('should throw an error for an invalid city', async () => {
    const cityName = "InvalidCityName";
    const apiKey = "04d34bd6395feacde72863bb2da2fc4b";
    getWindSpeed(cityName, apiKey)
      .then(result => {
        done();
      })
      .catch(error => strictEqual(error, "There was a problem with the fetch operation: Network response was not ok"));
  });
});
