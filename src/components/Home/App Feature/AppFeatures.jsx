import React from 'react'
import data from '../App Features Container/appFeatures'
import Analysis from './Analysis'
import Feature from './Feature'
import Photos from './Photos'

const AppFeatures = () => {
   
    return (
        <>
            <div className="col-12 col-lg-4">
                <h2 className='text-white pt-4 mb-4'>Appplication Features</h2>
                {data.featuresData.map((feature, index) => (
                    <Feature
                    key={index}
                        heading={feature.featureHeading}
                        list={feature.list}
                    />
                ))}
            </div>
            <div className="col-12 col-lg-4">
            <h2 className='text-white pt-4 mb-4'>Weather Analysis</h2>
                {data.analysisData.map((analysis, index) => (
                    <Analysis 
                    key={index}
                    heading={analysis.analysisHeading}
                    />
                ))}
                    
            </div>
            <div className='col-12 col-lg-4'>
            <h2 className='text-white pt-4 mb-4'>Awesome Photos</h2>
            <Photos />
                
            </div>
        </>
    )
}

export default AppFeatures
