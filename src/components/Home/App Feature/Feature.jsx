import React from 'react'

const Feature = ({heading, list}) => {
    return (
        <>
            <h5 className='feature-heading'><span className='text-primary'>→</span> {heading}</h5>
            <ul className='feature-text'>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Feature
