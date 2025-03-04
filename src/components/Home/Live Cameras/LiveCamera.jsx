import React from 'react'
import './live.cameras.css'
const LiveCamera = ({src, alt, title, cardText, linkHandler}) => {
    return (
        <div className="col-12 col-xl-3 col-md-6 mt-5">
            <div className="card live-card">
                <div className='img-container'>
                    <img style={{ width: '100%', height: '205px' }} src={src} alt={alt} />
                    <i className="bi bi-play-btn-fill" onClick={linkHandler}></i>
                </div>
                <div className="card-body live-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{cardText}</p>
                </div>
            </div>
        </div>
    )
}

export default LiveCamera
