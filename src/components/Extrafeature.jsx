import React from 'react'
import  {extraFeature}  from '../data/content'

const Extrafeature = () => {
    return (
        <div className='extraFeatureSection'>
            <div className="extraFeatureimgContainer">
                <img src={extraFeature.illustration} alt="" />
            </div>
            <h3 className="headText">{extraFeature.heading}</h3>
        </div>
    )
}

export default Extrafeature
