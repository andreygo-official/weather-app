import clearSkyNight from '../Images/clear-sky-night.png'
import clearSkyDay from '../Images/clear-sky.png'
import fewClouds from '../Images/few-clouds.png'
import fewCloudsNight from '../Images/few-clouds-night.png'
import showerRain from '../Images/shower-rain.png'
import rain from '../Images/rain.png'
import rainNight from '../Images/rain-night.png'
import thunderStorm from '../Images/thunderstorm.png'
import snow from '../Images/snow.png'
import mist from '../Images/mist.png'

const weatherIconMap = {
    "Clear": { day: clearSkyDay, night: clearSkyNight },
    "Clouds": { day: fewClouds, night: fewCloudsNight },
    "Drizzle": { day: showerRain, night: showerRain },
    "Rain": { day: rain, night: rainNight },
    "Thunderstorm": { day: thunderStorm, night: thunderStorm },
    "Snow": { day: snow, night: snow },
    "Atmosphere": { day: mist, night: mist }
};

const isDayTime = (sunrise, sunset) => {
    const now = new Date().getTime() / 1000;
    return now >= sunrise && now <= sunset;
}

const getWeatherIcon = (main, sunrise, sunset, forToday = true) => {
    const timeOfDay = forToday ? (isDayTime(sunrise, sunset) ? 'day' : 'night') : 'day'
    return weatherIconMap[main][timeOfDay];
}
function toTextualDescription(degree) {
    if (degree > 337.5) return 'Northerly';
    if (degree > 292.5) return 'North Westerly';
    if (degree > 247.5) return 'Westerly';
    if (degree > 202.5) return 'South Westerly';
    if (degree > 157.5) return 'Southerly';
    if (degree > 122.5) return 'South Easterly';
    if (degree > 67.5) return 'Easterly';
    if (degree > 22.5) { return 'North Easterly'; }
    return 'Northerly'
}
let date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(new Date())
const newDate = date.split(' ')
newDate.splice(1, 0, ' ')
date = newDate.slice(0, 3).join(' ')

const CelsiusConverting = (data) => {
   return Math.round(data.main.temp - 273.15)
}

export { getWeatherIcon, toTextualDescription, CelsiusConverting, date}