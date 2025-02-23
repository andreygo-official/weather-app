import React from 'react'
import './future.locations.css'
import FutureLocation from './FutureLocation'
import locationsData from './locationsData'
const FutureLocations = () => {
    return (
        <div className='future-locations-container'>
            <div className="container">
                <h1>Future Camera Locations 🎥</h1>
                <div className="row location-row">
                    {locationsData.map((location, index) => (
                        <FutureLocation
                            key={index}
                            date={location.date}
                            title={location.title}
                            text={location.text}
                        />
                    ))}
                </div>
                <p className='fs-4 pb-5 text-white'>Stay updated with our website for more announcements and the exact timings of when these feeds
                     will go live. We're always expanding our horizons to bring the world closer to you.</p>
            </div>

        </div>
    )
}

export default FutureLocations
