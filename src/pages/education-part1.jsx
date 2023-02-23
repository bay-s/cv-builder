import React from 'react'

const EducationPart1 = ({data}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const dates = new Date(data.school_graduate);
    const schoolDate = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');
    return(
        <div className='is-flex align-start justify-between w-100 is-size-7'>
        <ul className='is-flex flex-column '>
           <li className='is-flex align-start w-100 gap-1'>
                 <span className='is-title '>
                 {
                   !data.school_graduate ? 'Year Graduate'
                   : schoolDate
                 }
                 </span>
            </li>
            <li className=''>
            <span className='is-title '>
           {
                   !data.school_field ? 'Your FIELD OF STUDY'
                   : data.school_field
                 }
                 </span>
            </li>
            <li className='is-flex align-start gap-1'>
                 <span className='is-title'>
                 {
                   !data.school_name ? 'School Name'
                   : data.school_name
                 }
                 </span>
                 <span className='is-title '>
                   -
                 </span>
                 <span className='is-title '>
                 {
                   !data.school_location ? 'School Location'
                   : data.school_location
                 }
                 </span>
            </li>

           </ul>
 
        </div>
    )
}

export default EducationPart1