import React from 'react'
import './photos.style.css'
const Photo = ({ title, text, src }) => {
    return (
        <div class="col-md-12 col-lg-6 mb-4">
            <div className="card photo-card p-1">
                <div className="row photo-row">
                    <div className="col-md-4">
                        <img style={{ width: '100%', minHeight: '200px' }} src={src} className="img-fluid nature-img" alt='img' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body photo-card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}</p>
                            <div className='fs-5'>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo
