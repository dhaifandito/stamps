var moment = require('moment');
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=-6.2146&lon=106.8451&appid=41befe1ba6a920f29a659927ef511250&units=metric";

//Fungsi untuk fetching data dari API dan menampilkan data
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Weather Forecast:")
    dataWeather = data.list.map((i)=>{i.dt_txt.includes("15:00:00") && console.log(`${moment(i.dt_txt).format('ddd, DD MMM YYYY')}: ${i.main.temp}°C`)})
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
//Memanggil fungsi
fetchData();


