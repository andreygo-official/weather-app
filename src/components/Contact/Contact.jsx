import React from 'react'
import TransitionContainer from '../Transition Container/TransitionContainer'
import './contact.style.css'
import Form from './Form'
import Location from './Location'
const Contact = () => {
    const section = 'Contact'
    return (
        <div className='container mb-5'>
            <TransitionContainer section={section} />
            <div className='contact-cont'>
                <div className="row">
                   <Location />
                    <Form />
                </div>

            </div>

        </div>
    )
}

export default Contact
