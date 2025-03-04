import alertify from 'alertifyjs'
import React, { useEffect, useState } from 'react'
import { getWeatherIcon } from '../weatherUtils'
import '../../../../node_modules/alertifyjs/build/css/themes/default.css'
import '../../../../node_modules/alertifyjs/build/css/alertify.css'

import './weather.style.css'

const FiveDayForecast = ({ days, currentDayIndex, city }) => {
    const [weatherForecast, setWeatherForecast] = useState(null)
    const [err, setError] = useState(null)
    useEffect(() => {
        if (city)
            fetch(`http://localhost:3001/weather/forecast?city=${city}`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === '200') {
                        setWeatherForecast(data)
                        setError(null)
                    }
                    else {
                        setWeatherForecast(null)
                        setError("Some error message");
                        alertify.alert('Error', "The City does not exist", function () {
                            alertify.message('OK');
                            window.location.reload();
                        });

                    }
                })
                .catch(error => console.log(error))
    }, [city])
    if (weatherForecast) {
        const groupedForecasts = weatherForecast.list.reduce((acc, curr) => {
            const date = curr.dt_txt.split(' ')[0]
            if (!acc[date]) {
                acc[date] = []
            }
            acc[date].push(curr)
            return acc

        }, {})
        const avgTemperatures = {};
        const avgFeelsLike = {}
        for (let date in groupedForecasts) {
            const dailyForecasts = groupedForecasts[date]
            const totalTemp = dailyForecasts.reduce((acc, curr) => acc + curr.main.temp, 0)
            const totalFeelsLike = dailyForecasts.reduce((acc, curr) => acc + curr.main.feels_like, 0)
            avgTemperatures[date] = totalTemp / dailyForecasts.length
            avgFeelsLike[date] = totalFeelsLike / dailyForecasts.length
        }
        const getMostFrequentWeather = (dailyData) => {
            const frequency = {};
            dailyData.forEach(interval => {
                const main = interval.weather[0].main;
                frequency[main] = (frequency[main] || 0) + 1;
            });
            return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
        }
        const getDailyIcon = (dailyData) => {
            const mostFrequentWeather = getMostFrequentWeather(dailyData);
            return getWeatherIcon(mostFrequentWeather, dailyData[0].sys.sunrise, dailyData[0].sys.sunset, false);
        };

        return (
            <>
                {days.map((day, index) => {
                    if (index >= 5)
                        return null
                    let backGroundColor = index % 2 === 0 ? 'rgb(29, 26, 53)' : 'rgb(56, 54, 76)'
                    let backGroundColorForWeatherInfo = index % 2 === 0 ? 'rgb(42, 45, 99)' : 'rgb(78, 76, 104)'
                    const forecastDayIndex = (currentDayIndex + index + 1) % 7
                    const forecastDate = new Date();
                    forecastDate.setDate(forecastDate.getDate() + index + 1);
                    const formattedDate = forecastDate.toISOString().split('T')[0];
                    const avgTempForDay = avgTemperatures[formattedDate]
                    const avgFeelsLikeForDay = avgFeelsLike[formattedDate]
                    const dailyData = weatherForecast.list.slice(index * 8, (index + 1) * 8);
                    const dailyIconSrc = getDailyIcon(dailyData)

                    return (
                        <div key={index} style={{ backgroundColor: backGroundColorForWeatherInfo }} className='forecast forecast-five-days'>
                            <div style={{ backgroundColor: backGroundColor }} className='forecast-day'>
                                <div>{days[forecastDayIndex]}</div>
                            </div>
                            <div className='forecast-info'>
                                <div className='weather-icon'>
                                    <img className='forecast-img' src={dailyIconSrc} alt="icon" />
                                </div>
                                <div className='forecast-temperature'>
                                    {(avgTempForDay - 273.15).toFixed(0)}°C
                                </div>
                                <div className='feeling-temperature'>
                                    {(avgFeelsLikeForDay - 273.15).toFixed(0)}°
                                </div>
                            </div>
                        </div>

                    )
                })}
            </>
        )
    }
    if(err){
        alert('error fethcing data')
    }
}

export default FiveDayForecast
