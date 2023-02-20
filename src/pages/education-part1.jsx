import React from 'react'

const EducationPart1 = ({data}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const dates = new Date(data.school_graduate);
    const schoolDate = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');
    return(
        <div className='is-flex align-start justify-between w-100'>
        <ul className='is-flex flex-column'>
           <li className='is-flex align-start w-100 gap-1'>
                 <span className='is-title'>
                 YEAR OF GRADUATION
                 </span>
                 <span className='is-title '>
                  -
                 </span>
                 <span className='is-title '>
                 {
                   !data.school_graduate ? 'The Date'
                   : schoolDate
                 }
                 </span>
            </li>
            <li className='is-flex align-start gap-1'>
                 <span className='is-title'>
                 School Location
                 </span>
                 <span className='is-title '>
                   -
                 </span>
                 <span className='is-title '>
                 {
                   !data.school_location ? 'Your School Location'
                   : data.school_location
                 }
                 </span>
            </li>
           </ul>
           <ul className='is-flex flex-column'>
           <li className='is-flex align-start flex-column'>
            <h4 className='is-title is-bold'>
            {
                   !data.school_name ? 'Your School Name'
                   : data.school_name
                 }
           </h4>
           <span className='is-title '>
           {
                   !data.school_field ? 'Your FIELD OF STUDY'
                   : data.school_field
                 }
                 </span>
            </li>
           </ul>
        </div>
    )
}

export default EducationPart1