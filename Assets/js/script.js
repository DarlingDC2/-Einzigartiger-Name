

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Maybee,MI,US&appid=7972e0046f5da850a7265105b61c7dc3`, {
    method: 'GET',
})
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    localStorage.setItem('maybeeData', JSON.stringify(data));
    console.log(data);
  });

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Milan,US-MI,US&appid=7972e0046f5da850a7265105b61c7dc3`, {
    method: 'GET',
})
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    localStorage.setItem('milanData', JSON.stringify(data));
    console.log(data);
  });