import React from 'react'
import AppFeatures from '../App Feature/AppFeatures'
import './app.features.css'
const AppFeaturesContainer = () => {
    return (
        <div className='app-features-container'>
            <div className='container'>
                <div className="row">
                    <AppFeatures />
                </div>
            </div>
        </div>
    )
}

export default AppFeaturesContainer
