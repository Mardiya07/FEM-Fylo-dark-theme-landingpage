import React from 'react'
import TestimonialCard from './TestimonialCard'
import { testimonial } from '../../data/content'

function TestimonialSection() {
  return (
    <div className='testimonialSection'>
        {
            testimonial.map((item)=>{
                return( 
                <TestimonialCard key={item.id} avatar={item.avatar} bodyText={item.testimonialBody} giverName={item.giverName} giverTitle={item.giverTitle} giverCompany={item.giverCompany}  />
            )
            })
        }
    </div>
  )
}

export default TestimonialSection