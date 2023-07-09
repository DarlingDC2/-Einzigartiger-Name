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




  
    <div class="container">
        <div class="row">

            <div class="col-2" style="margin: 75px 0px;">
                <div>
                    <form id="search">
                        <input class="box" type="text" id="citySearch" placeholder="Find City">
                        <button style="margin: 0px 0px 20px 0px;" class="col-12" type="submit">Search</button>
                    </form>
                </div>

                <div class="d-flex bg-light justify-content-center" style="padding: 5px;">
                    <button type="button" class="btn btn-primary btn-lg col-12">Milan</button>
                </div>

                <div class="d-flex bg-light justify-content-center" style="padding: 5px;">
                    <button type="button" class="btn btn-primary btn-lg col-12">Maybee</button>
                </div>
            </div>
            
            <div class="col-10">
                <div class="d-flex bg-light justify-content-center" style="margin: 150px 0px;">
                    <p style="font-size: 30px;">Cities</p>
                </div>
            </div>

        </div>
    </div>
