import React from 'react'
import {extraFeature,icons} from '../data/content'

const Extrafeature = () => {
    return (
        <div className='extraFeatureSection'>
            <div className="extraFeatureImgContainer">
                <img src={extraFeature.extra.illustration} alt="illustration of people holding cards" className='extraFeatureimg' />
            </div>
            <div className="extraFeatureTextContainer">
            <h3 className="headText fontHeadnCTAs">{extraFeature.extra.heading}</h3>
            <p className="bodyText fontBody">{extraFeature.extra.paragraph1}</p>
            <p className="bodyText fontBody">{extraFeature.extra.paragraph2}</p>
             {/* a css :after could place the icon  */}
            <div className='extraFeatureLinkWrapper'> 
            <a href="#dd" className="linkText fontHeadnCTAs">{extraFeature.extra.linkText}</a><img src={icons.iconArrow} alt="arrow icon" className='iconArrow'/>
            </div>
            </div>
        </div>
    )
}

export default Extrafeature
