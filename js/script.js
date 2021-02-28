
const API_KEY = '4127d47d32b6db269aa3f5f6e4f3f218';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const $city = $('#city');
const $temperature= $('#temperature');
const $feels = $('#feels');
const $input = $('input[type="text"]');
let weatherData, userInput;
$('form').on('submit', handleGetData);
function handleGetData(event){
   event.preventDefault();

   userInput = $input.val();
    $.ajax ({
        url:'http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=4127d47d32b6db269aa3f5f6e4f3f218&q=' + userInput
    }).then (
        (data) => {
            weatherData = data;
            //name1 = weatherData.name;
            //Temperature = weatherData.main.temp

            console.log(data)
            render();
        },
        (error) => {
            console.log('bad request', error);
        }
    );
    
    }
function render(){
    $city.text(weatherData.name)
    $temperature.text(weatherData.main.temp);
    $feels.text(weatherData.main.feels_like);
}
//constant and variables

// Cached Element References 

//Event Listeners 

//Function

//


//q={city name}&appid={API key}
