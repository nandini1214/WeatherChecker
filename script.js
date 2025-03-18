const apiKey = "df95c4e8557f17db9257aadf96c77d83";
const defaultCity = "indore";
document.querySelector("#search-btn").addEventListener("click", () => {
  const cityName = document.querySelector("#search").value;
  checkWhether(cityName);
});

async function checkWhether(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    const icon = data.weather[0].icon;
    const temp = Math.floor(data.main.temp);
    document.querySelector(
      ".weather-icon"
    ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${temp}°C`;
    document.querySelector(".desc").innerHTML = data.weather[0].description;
    document.querySelector(".humidity-percent").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-value").innerHTML =
      (data.wind.speed * 3.6).toFixed(2) + " km/h";
  } catch (err) {
       alert("City not found");
  }
}
document.addEventListener("DOMContentLoaded", () => {
    checkWhether(defaultCity);
});