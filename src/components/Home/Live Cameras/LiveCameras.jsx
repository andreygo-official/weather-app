import React from 'react'
import { cameraData } from './cameraData'
import LiveCamera from './LiveCamera'
import './live.cameras.css'
const LiveCameras = () => {
    const linkHandler = (link) => {
        window.open(link, '_blank')
    }
    return (

        <div className="row cameras-row">
            {cameraData.map((camera, index) => (
                <LiveCamera
                    key={index}
                    src={camera.src}
                    alt={camera.alt}
                    linkHandler={() => linkHandler(camera.link)}
                    title={camera.title}
                    cardText={camera.cardText}
                />
            ))}
        </div>
    )
}

export default LiveCameras
