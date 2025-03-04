import React from 'react'
import './future.locations.css'
const FutureLocation = ({ date, title, text }) => {
    return (
        <div className="col-12 col-md-12 col-lg-4 location-col mt-4">
            <div className='location-cont'>
                <div className='date'>{date}</div>
                <div className='locations-text'>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>

        </div>
    )
}

export default FutureLocation
