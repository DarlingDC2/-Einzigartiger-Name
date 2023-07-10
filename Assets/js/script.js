var currentDate = new Date().toLocaleDateString("en-US", { weekday:"long", month:"long", day:"numeric", hour: "numeric", minute: "numeric"});
document.getElementById("currentDay").textContent = currentDate;
var apiKey = '7972e0046f5da850a7265105b61c7dc3';
var searchForm = document.querySelector('#search-button');
var cityInput = document.querySelector('#city-search');
var currentWeather = document.querySelector('#current');
var forecastContainer = document.querySelector('#forecast');
var searchHistoryList = document.querySelector('#History');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var city = cityInput.value.trim();
  fetchWeatherData(city);
});

searchHistoryList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    var city = event.target.textContent;
    fetchWeatherData(city);
  }
});

function fetchWeatherData(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US-MI,US&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
      displayCurrentWeather(data);
      console.log(data);
      storeSearchHistory(city);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},US-MI,US&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayForecast(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayCurrentWeather(data) {
var cityName = data.name;
    var currentWeatherHTML = `
    <h2>${cityName} ${currentDate}</h2>
    <p>Temperature: ${data.main.temp} °F;</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} mph</p>
    `;
    currentWeather.innerHTML = currentWeatherHTML;
}

function displayForecast(data) {
    var forecastItems =  [data.list[0], data.list[8], data.list[16], data.list[24], data.list[32]];
    var forecastHTML = forecastItems.map(item => {
    var date = new Date(item.dt * 1000);
    return `
    
    
    <div class="forecast-item">
        <h3>${date.toLocaleDateString()}</h3>
        <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="Weather Icon">
        <p>Temperature: ${item.main.temp}  °F</p>
        <p>Humidity: ${item.main.humidity}%</p>
        <p>Wind Speed: ${item.wind.speed} mph</p>
      </div>
    `;
  }).join('');
  forecastContainer.innerHTML = forecastHTML;
}


function storeSearchHistory(city) {
  var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  searchHistory.push(city);
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  updateSearchHistory(searchHistory);
}

function updateSearchHistory(searchHistory) {
  searchHistoryList.innerHTML = '';
  var listItems = searchHistory.map(city => `<li>${city}</li>`).join('');
  searchHistoryList.innerHTML = listItems;
}

var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
updateSearchHistory(searchHistory);