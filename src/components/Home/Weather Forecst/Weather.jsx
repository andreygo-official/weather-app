
import './weather.style.css'
import React, { useEffect, useState } from 'react'
import TodayWeather from './TodayWeather'
import FiveDayForecast from './FiveDayForecast'
import SearchField from './SearchField'
import LiveCameras from '../Live Cameras/LiveCameras'
import useGeolocation from '../useGeolocation'
import useCityName from '../useCityName'
import { date } from '../weatherUtils'

const Weather = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDayIndex = new Date().getDay()
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true)
    const position = useGeolocation()
    const geolocationCity = useCityName(position?.coords?.latitude, position?.coords?.longitude);
    useEffect(() => {
        if (geolocationCity) {
            setCity(geolocationCity);
            setLoading(false);
        }
    }, [geolocationCity]);
  
    
    const [inputValue, setInputValue] = useState('')
    const onChangeHandler = (e) => {
        setInputValue(e.target.value)
    }
    const onClickHandler = () => {
        setCity(inputValue)
        setLoading(true);
    }

    
    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    if (city) {
        return (
            <div className='weather-container'>
                <div className='cont'>
                    <div className="container">
                        <form className='search-field'>
                            <div className='input-wrapper'>
                                <SearchField value={inputValue} onChangeHandler={onChangeHandler} />
                                <input type="button" value="Find" disabled={!inputValue} className='btn btn-primary btn-find' onClick={onClickHandler} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='forecast-table'>
                    <div className="container table-container">
                        <TodayWeather
                            days={days}
                            currentDayIndex={currentDayIndex}
                            date={date}
                            city={city}
                        />


                        <FiveDayForecast city={city} days={days} currentDayIndex={currentDayIndex} />
                    </div>
                </div>
                <div className="container live-cameras-container">
                    <h1 className='cameras-heading'>Live cameras</h1>
                    <LiveCameras />
                </div>

            </div>
        )
    }

    else {
        return <div className="loading">Loading...</div>;
    }
}

export default Weather
