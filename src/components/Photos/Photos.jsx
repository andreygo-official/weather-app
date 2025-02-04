import React from 'react'
import TransitionContainer from '../Transition Container/TransitionContainer'
import { photoList } from './photosList'
import Photo from './Photo'

const Photos = () => {
    const section = 'Photos'
    return (
        <div className='container'>
            <TransitionContainer section={section} />
            <div className="row mt-4">
                {
                    photoList.map((photo, index) => (
                        <Photo
                            key={index}
                            title={photo.title}
                            text={photo.description}
                            src={photo.imgSrc}
                        />
                    ))
                }
            </div>

        </div>

    )
}

export default Photos
