import React from 'react'

const Location = () => {
    return (
        <div className='map-container col-md-12 col-lg-6 mt-4'>
            <div className='google-map'>
                <iframe
                    className='googleMap'
                    title='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82340.72509323913!2d24.02971703189491!3d49.839682990491255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2sLviv%2C%20Lviv%20Oblast%2C%2079000!5e0!3m2!1sen!2sua!4v1704462811148!5m2!1sen!2sua"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className='location-info'>
                <i className="bi bi-geo-alt-fill"></i>
                <p>
                    Company Name INC.<br />
                    2803 Avenue Street, Los Angeles
                </p>
            </div>
            <div className='contact-info'>
                <p>
                    <i className="bi bi-telephone-fill me-2"></i>
                    <span>+1 800 314 235</span>
                </p>
                <p className='ms-5'>
                    <i className="bi bi-envelope-at-fill me-2"></i>
                    <a className='my-email' href="mailto:strafelord24@gmail.com">strafelord24@gmail.com</a>
                </p>
            </div>
        </div>
    )
}

export default Location
