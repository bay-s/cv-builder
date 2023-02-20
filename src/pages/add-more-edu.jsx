import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import EducationPart from './education-part';
import EducationPart1 from './education-part1';



const AddMoreEducation = () => {
  const {value} = useContext(AppContext)
	const navigate = useNavigate()
	const submitForm = (e) => {
		e.preventDefault()
		value.submitEducation()
		navigate('/create-cv/education')
	  }
    return(
<div className='is-flex flex-column gap-6 p-4'>
<h3 className='is-title is-bold is-size-4'>Review your experience</h3>
            
<form className='is-flex flex-column gap-3' onSubmit={submitForm}>

<div className='card shadow is-flex flex-column gap-1 p-4 align-start'>
<EducationPart1 data={value.data}/>
<EducationPart data2={value.data2}/>
</div>

<button className='no-border is-flex align-center gap-1'>
<i class="fa fa-plus has-text-info" aria-hidden="true"></i>
<span className='is-title has-text-info is-bold'>ADD MORE EDUCATION</span>
</button>
</form>

  <div className='is-flex align-center justify-between'>
    <Link to='/create-cv/header' className='button is-medium'>Back</Link>
    <Link to='/print' className='button is-primary is-medium'>Continue</Link>
  </div>


        </div>
    )
}

export default AddMoreEducation;


