const itineraryName = "Tasmania - Melbourne Trip";

const weatherData = [
  {
    date: "15 May 2025",
    location: "Changi Airport, Singapore",
    weather: "☀️ Mostly clear",
    temperature: "Low: 27°C, High: 30°C",
    sunrise: "06:56 AM",
    sunset: "07:05 PM",
  },
  {
    date: "16 May 2025",
    location: "Hobart, Tasmania",
    weather: "🌥 Partly cloudy",
    temperature: "Low: 9°C, High: 14°C",
    sunrise: "07:22 AM",
    sunset: "04:57 PM",
  },
  {
    date: "17 May 2025",
    location: "Hobart, Tasmania",
    weather: "🌧 Showers",
    temperature: "Low: 8°C, High: 13°C",
    sunrise: "07:23 AM",
    sunset: "04:56 PM",
  },
  {
    date: "18 May 2025",
    location: "Hobart, Tasmania",
    weather: "☀️ Sunny",
    temperature: "Low: 7°C, High: 15°C",
    sunrise: "07:24 AM",
    sunset: "04:55 PM",
  },
  {
    date: "19 May 2025",
    location: "Bruny Island, Tasmania",
    weather: "🌥 Partly cloudy",
    temperature: "Low: 8°C, High: 14°C",
    sunrise: "07:25 AM",
    sunset: "04:55 PM",
  },
  {
    date: "20 May 2025",
    location: "Coles Bay, Tasmania",
    weather: "☁️ Cloudy",
    temperature: "Low: 7°C, High: 12°C",
    sunrise: "07:26 AM",
    sunset: "04:54 PM",
  },
  {
    date: "21 May 2025",
    location: "Coles Bay, Tasmania",
    weather: "🌬️ Windy",
    temperature: "Low: 6°C, High: 11°C",
    sunrise: "07:27 AM",
    sunset: "04:54 PM",
  },
  {
    date: "22 May 2025",
    location: "Launceston, Tasmania",
    weather: "☁️ Cloudy",
    temperature: "Low: 5°C, High: 12°C",
    sunrise: "07:28 AM",
    sunset: "04:54 PM",
  },
  {
    date: "23 May 2025",
    location: "Launceston, Tasmania",
    weather: "🌧 Rain",
    temperature: "Low: 5°C, High: 11°C",
    sunrise: "07:28 AM",
    sunset: "04:53 PM",
  },
  {
    date: "24 May 2025",
    location: "Melbourne, Victoria",
    weather: "☀️ Sunny",
    temperature: "Low: 10°C, High: 16°C",
    sunrise: "07:23 AM",
    sunset: "05:10 PM",
  },
  {
    date: "25 May 2025",
    location: "Apollo Bay, Victoria",
    weather: "🌤 Partly cloudy",
    temperature: "Low: 11°C, High: 17°C",
    sunrise: "07:24 AM",
    sunset: "05:09 PM",
  },
  {
    date: "26 May 2025",
    location: "Apollo Bay, Victoria",
    weather: "🌧 Showers",
    temperature: "Low: 9°C, High: 14°C",
    sunrise: "07:25 AM",
    sunset: "05:08 PM",
  },
  {
    date: "27 May 2025",
    location: "Port Campbell, Victoria",
    weather: "🌥 Cloudy",
    temperature: "Low: 10°C, High: 15°C",
    sunrise: "07:25 AM",
    sunset: "05:08 PM",
  },
  {
    date: "28 May 2025",
    location: "Melbourne, Victoria",
    weather: "☀️ Sunny",
    temperature: "Low: 19°C, High: 21°C",
    sunrise: "07:26 AM",
    sunset: "05:07 PM",
  },
  {
    date: "29 May 2025",
    location: "Melbourne, Victoria",
    weather: "🌤 Partly cloudy",
    temperature: "Low: 20°C, High: 22°C",
    sunrise: "07:26 AM",
    sunset: "05:07 PM",
  },
];

// Function to add the day of the week to each entry
weatherData.forEach((entry) => {
  const dateObj = new Date(entry.date);
  const day = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
  entry.day = day;
});

console.log(weatherData);
