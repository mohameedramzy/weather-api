


async function getWeather() {
  const cityInput = document.getElementById("cityInput").value.trim();
  const apiKey = "7df7dd1aa9e4413ba36213835241412";
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput}&days=3`;

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();

    document.getElementById("city-name").textContent = ` ${data.location.name}, ${data.location.country}`;
    document.getElementById("city-name2").textContent = ` ${data.location.name}, ${data.location.country}`;
    document.getElementById("city-name3").textContent = ` ${data.location.name}, ${data.location.country}`;


    const getDayAndDate = (dateStr) => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const date = new Date(dateStr);
      const day = days[date.getDay()]; 
      const dayDate = date.getDate(); 
      const month = date.toLocaleString('default', { month: 'short' }); 
      return `${day} | ${dayDate} ${month}`; 
    };

    document.getElementById("day1-day").textContent = getDayAndDate(data.forecast.forecastday[0].date).split(" | ")[0];
    document.getElementById("day1-date").textContent = getDayAndDate(data.forecast.forecastday[0].date).split(" | ")[1];
    document.getElementById("day1-temp").textContent = `Max: ${data.forecast.forecastday[0].day.maxtemp_c}°C | Min: ${data.forecast.forecastday[0].day.mintemp_c}°C`;
    document.getElementById("day1-desc").textContent = `Condition: ${data.forecast.forecastday[0].day.condition.text}`;
    document.getElementById("day1-icon").src = `${data.forecast.forecastday[0].day.condition.icon}`;

    document.getElementById("day2-day").textContent = getDayAndDate(data.forecast.forecastday[1].date).split(" | ")[0];
    document.getElementById("day2-date").textContent = getDayAndDate(data.forecast.forecastday[1].date).split(" | ")[1];
    document.getElementById("day2-temp").textContent = `Max: ${data.forecast.forecastday[1].day.maxtemp_c}°C | Min: ${data.forecast.forecastday[1].day.mintemp_c}°C`;
    document.getElementById("day2-desc").textContent = `Condition: ${data.forecast.forecastday[1].day.condition.text}`;
    document.getElementById("day2-icon").src = `${data.forecast.forecastday[1].day.condition.icon}`;

    document.getElementById("day3-day").textContent = getDayAndDate(data.forecast.forecastday[2].date).split(" | ")[0];
    document.getElementById("day3-date").textContent = getDayAndDate(data.forecast.forecastday[2].date).split(" | ")[1];
    document.getElementById("day3-temp").textContent = `Max: ${data.forecast.forecastday[2].day.maxtemp_c}°C | Min: ${data.forecast.forecastday[2].day.mintemp_c}°C`;
    document.getElementById("day3-desc").textContent = `Condition: ${data.forecast.forecastday[2].day.condition.text}`;
    document.getElementById("day3-icon").src = `${data.forecast.forecastday[2].day.condition.icon}`;
  } else {
    document.getElementById("day1-day").textContent = "Error";
    document.getElementById("day1-date").textContent = "City not found";
    document.getElementById("day1-temp").textContent = "";
    document.getElementById("day1-desc").textContent = "";
    document.getElementById("day1-icon").src = "";

    document.getElementById("day2-day").textContent = "";
    document.getElementById("day2-date").textContent = "";
    document.getElementById("day2-temp").textContent = "";
    document.getElementById("day2-desc").textContent = "";
    document.getElementById("day2-icon").src = "";

    document.getElementById("day3-day").textContent = "";
    document.getElementById("day3-date").textContent = "";
    document.getElementById("day3-temp").textContent = "";
    document.getElementById("day3-desc").textContent = "";
    document.getElementById("day3-icon").src = "";
  }
}

document.getElementById("cityInput").addEventListener("input", getWeather);
