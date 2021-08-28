const loadData = () => {
  //get value and set id
  const cityInput = document.getElementById("cityInput");
  let cityInputName = cityInput.value;
  //api key
  const apiKey = "55a46ecc32e557234eeaa584b270c635";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputName}&appid=${apiKey}`;
  //error handle message
  if (cityInput.value == "") {
    alert("please Input A Value");
  }
  //success
  else {
    //api call
    fetch(url)
      .then((res) => res.json())
      .then((data) => showWeatherData(data));
  }

  //clear input value
  cityInput.value = "";
};

//show weather data
const showWeatherData = (data) => {
  //sucess message
  if (data.name) {
    //set id and get value
    const cityName = document.getElementById("city-name");
    const tempreateure = document.getElementById("tempreateure");
    const skyLook = document.getElementById("sky");
    const tempreateureTotal = (data.main.temp - 273.15).toFixed(2);
    //set inner Text name , temp, and sky
    cityName.innerText = data.name;
    tempreateure.innerText = tempreateureTotal;
    skyLook.innerText = data.weather[0].main;
  }
  //error message
  else {
    alert("your city not Valid");
  }
};
