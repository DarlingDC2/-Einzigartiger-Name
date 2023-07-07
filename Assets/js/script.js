var APIKey = "7972e0046f5da850a7265105b61c7dc3";

fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=48159,US&appid=7972e0046f5da850a7265105b61c7dc3`, {
    method: 'GET',
})
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);
  });