import React from 'react'

function TestimonialCard(props) {
  return (
    <div className='testimonialCard'>
        <p className='testimonialBody fontBody'>{props.bodyText}</p>
        <div className='testimonialGiverDetails'>
            <img src={props.avatar} alt='Avatar' className='testimonialAvatar'/>
            <div className='testimonialGiverTextDetails'>
                <h3 className='testimonialGiverDetails__Name fontHeadnCTAs'>{props.giverName}</h3>
                <p className='testimonialGiverDetails__Position fontBody'>{props.giverTitle}, {props.giverCompany}</p>
            </div>
        </div>

    </div>
  )
}

export default TestimonialCard