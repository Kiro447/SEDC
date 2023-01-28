const apiParameters = {
  globalCity: `Skopje`,
  apiKey: `74e59f6374abe0d9b758877616ae444c`,
  apiFirstUrl: `https://api.openweathermap.org/data/2.5/onecall`,
  apiSecondUrl: `https://api.openweathermap.org/data/2.5/forecast`,
  imgUrl: ` http://openweathermap.org/img/wn/`,
};

let div = document.getElementById("container");

const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          return resolve(position);
        },
        (err) => {
          return reject(err);
        }
      );
    } else {
      return reject("Geolocation is not supported by this browser.");
    }
  });
};

getLocation().then((position) => {
  const { latitude, longitude } = position.coords;
  // const latitude = position.coords.latitude; istoto ko nad ova
  // const longitude = position.coords.longitude; istoto ko nad ova

  fetch(
    `${apiParameters.apiFirstUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.daily[0].dt);
      console.log(data.hourly.length);
      cardCreator(data);
    });
});

function cardCreator(data) {
  for (let i = data.hourly.length-1; i > 0; i--) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <h1>Card ${i}</h1>
        <h1>${data.timezone}</h1>
        <h1>DayTime ${new Date(data.hourly[i].dt * 1000)}</h1>
        <h1>Temperature ${data.hourly[i].temp}</h1>
        <h1>Feels Like ${data.hourly[i].feels_like}</h1>
        <h1>Pressure ${data.hourly[i].pressure}</h1>
        <h1>Humidity ${data.hourly[i].humidity}</h1>
        <br>
    `;
    newDiv.style.border = '1px solid black'
    newDiv.style.width = '1100px'
    div.after(newDiv);
    // div.innerHTML = `
    // <h1>Temperature ${data.current.temp}</h1>        
    // <h1>TimeZone: ${data.timezone}</h1>   
  
    // `;
  }
}

`
5. inside the javascript, select the div and get it ready to append innerHTML or append cards in it
6. create a function that accepts an object as argument and returns a string with HTML syntax that will represent a card

7. Create a function that will fetch the GPS coordinates and then fetch the weather data for the given coordinates, and call the function that returns the data to return the data and add it to the card container.
`;
