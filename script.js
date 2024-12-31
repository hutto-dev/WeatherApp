const zipcodeAPI =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33&lon=-77&units=imperal&appid=b95006171527bc6aa7da23b8a745c857";

async function getData() {
  try {
    const response = await fetch(zipcodeAPI);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("There was an error fetching the data");
  }
}

getData();
