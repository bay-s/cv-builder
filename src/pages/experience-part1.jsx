import React from 'react'

const ExperiencePart1 = ({data}) => {
    const date = new Date(data.start_date);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const startDate = date.toLocaleDateString('en-US', options).replace(/\//g, '-');
    
    const datez = new Date(data.end_date);
    const endDate = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');
    
    return(

        <div className='is-flex align-start justify-between is-size-7'>
        <ul className='is-flex flex-column'>
           <li className='is-flex align-start w-100 gap-1'>
                 <span className='is-title'>
                 {
                   !data.start_date ? 'Start Date'
                   : startDate
                 }
                 </span>
                 <span className='is-title '>
                   To
                 </span>
                 <span className='is-title '>
                 {
                   !data.end_date ? 'End Date'
                   : endDate
                 }
                 </span>
            </li>
            <li className='is-flex align-start gap-1'>
                 <span className='is-title'>
                 {
                   !data.city_job ? 'City'
                   : data.city_job
                 }
                 </span>
                 <span className='is-title '>
                   -
                 </span>
                 <span className='is-title '>
                 {
                   !data.country ? 'Country'
                   : data.country
                 }
                 </span>
            </li>
            <li className='is-flex align-start gap-1'>
                 <span className='is-title'>
                 {
                           data.job_title === '' ? 'Your job title'
                           : data.job_title
                       }
                 </span>
                 <span className='is-title '>
                   -
                 </span>
                 <span className='is-title '>
                 {
                   !data.employer ? 'Company name'
                   : data.employer
                 }
                 </span>
            </li>
           </ul>
        </div>
    )
}

export default ExperiencePart1