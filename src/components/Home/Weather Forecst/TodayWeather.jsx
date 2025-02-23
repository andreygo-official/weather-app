import React, { useEffect, useState } from 'react'
import { getWeatherIcon, toTextualDescription, CelsiusConverting } from '../weatherUtils'
import './weather.style.css'

const TodayWeather = ({ days, currentDayIndex, date, city }) => {
    const [weatherData, setWeather] = useState(null)
    const [err, setError] = useState(null)
    useEffect(() => {
        if (city)
            fetch(`http://localhost:3001/weather?city=${city}`)
                .then(res => res.json())
                .then(data => {
                    if (data.cod === 200) {
                        setWeather(data)
                        setError(null)
                    }
                    else {
                        setWeather(null)
                        setError(<h1>No city</h1>)
                    }
                })
                .catch(error =>
                    console.log(error)
                )
    }, [city])


    if (weatherData) {
        const iconSrc = getWeatherIcon(weatherData.weather[0].main, weatherData.sys.sunrise, weatherData.sys.sunset)
        return (
            <div className='today forecast'>
                <div className='today-forecast-info'>
                    <div>{days[currentDayIndex]}</div>
                    <div>{date}</div>
                </div>
                <div className='forecast-for-today'>
                    <div className='current-day-info'>
                        <p className='city'>{city || err}</p>
                        <div className='current-weather'>
                            <span className='me-4 current-temp'>{CelsiusConverting(weatherData)}°C</span>
                            <img className='temp-icon' src={iconSrc} alt="temp-info" />
                        </div>
                        <div className='wind-info'>
                            <div className='me-4'>
                                <i className="bi bi-wind"></i>{' '}
                                <span>{weatherData.wind.speed}km/h</span>
                            </div>
                            <div>
                                <i className="bi bi-compass"></i>{' '}
                                <span>{toTextualDescription(weatherData.wind.deg)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodayWeather
