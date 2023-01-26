WEATHER APP

```javascript
const apiParameters = {
    // globalCity: `Skopje`,
    apiKey: `74e59f6374abe0d9b758877616ae444c`,
    apiFirstUrl: `https://api.openweathermap.org/data/2.5/onecall`,
    apiSecondUrl: `https://api.openweathermap.org/data/2.5/forecast`,
    imgUrl: ` http://openweathermap.org/img/wn/`,
}

    const getLocation =  () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition( (position) =>{
                    return resolve(position);
                },  (err)=> {
                    return reject(err);
                });
            } else {
                return reject("Geolocation is not supported by this browser.");
            }
        })
    };
    const gpsData = getLocation()
    .then(position =>{
    const {latitude, longitude} = gpsData.coords;
    // const latitude = position.coords.latitude;
    // const longtitude = position.coords.longtitude
 fetch(`${apiParameters.apiFirstUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`)

})




`
5. inside the javascript, select the div and get it ready to append innerHTML or append cards in it
6. create a function that accepts an object as argument and returns a string with HTML syntax that will represent a card

7. Create a function that will fetch the GPS coordinates and then fetch the weather data for the given coordinates, and call the function that returns the data to return the data and add it to the card container.
`

