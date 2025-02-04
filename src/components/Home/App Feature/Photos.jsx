import React from 'react'
import data from '../App Features Container/appFeatures';
import '../App Features Container/app.features.css'
const Photos = () => {
    function chunkArray(array, chunkSize) {
        let result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    }
    const chunkedPhotos = chunkArray(data.photosData, 3);
    return (
        <>
            {chunkedPhotos.map((photosRow, rowIndex) => (
                <div className='row mt-3' key={rowIndex}>
                    {photosRow.map((photo, index) => (
                        <div className='col-4' key={index}>
                            <img
                                className='awesome-photo'
                                src={photo.src}
                                alt={photo.alt}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

export default Photos
