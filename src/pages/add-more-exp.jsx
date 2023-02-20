import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import ExperiencePart from './experience-part';
import ExperiencePart1 from './experience-part1';



const AddMoreExperience = () => {
  const {value} = useContext(AppContext)
    const navigate = useNavigate()
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const datez = new Date(value.data.end_date);
    const endDate = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');
    
    const dates = new Date(value.data.start_date);
    const startDate = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');

    const submitForm = (e) => {
      e.preventDefault()
      value.submitExperience()
      navigate('/create-cv/experience')
    }
    return(
<div className='is-flex flex-column gap-6 p-4'>
<h3 className='is-title is-bold is-size-4'>Review your experience</h3>
            
<form className='is-flex flex-column gap-3' onSubmit={submitForm }>

{/* START JOB EXPERIENCE */}
<article className='is-flex flex-column gap-1 card shadow p-3'>
				<div className='is-flex align-center gap-1 border-butt'>
				  <i class="fa fa-suitcase " aria-hidden="true"></i>
                  <h3 className=' is-title is-bold'>Job Experience</h3>
				</div>
      <ExperiencePart1 data={value.data} />
     <ExperiencePart data2={value.data2}/>
	 </article>

<button className='no-border is-flex align-center gap-1'>
<i class="fa fa-plus has-text-info" aria-hidden="true"></i>
<span className='is-title has-text-info is-bold'>ADD MORE EXPERIENCE</span>
</button>
</form>

  <div className='is-flex align-center justify-between'>
    <Link to='/create-cv/header' className='button is-medium'>Back</Link>
    <Link to='/create-cv/education' className='button is-primary is-medium'>Continue</Link>
  </div>


        </div>
    )
}

export default AddMoreExperience;


