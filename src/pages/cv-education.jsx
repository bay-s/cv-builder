import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { AppContext } from '../App';



const CvEducation = () => {
  const {value} = useContext(AppContext)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    // perform form submission logic
    navigate('/create-cv/add-more');
  }

  
    return(
<div className='is-flex flex-column gap-6 p-4'>
            <ul className=''>
                <li><h3 className='is-title is-bold is-size-4'>Let's start with your Education Detail.</h3></li>
                <li><p className='is-title '>Include your full name and at least one way for employers to contact you.</p></li>            
            </ul>

<form className='is-flex flex-column gap-3' onSubmit={handleSubmit }>

<div class="field is-horizontal">
<div class="field-body">

<div class="field">
    <label class="label">School Name</label>
    <input class="input " type="text" name='school_name' defaultValue={value.data.school_name} placeholder="e.g Indonesia" onChange={value.handlerChange} />
</div>

<div class="field">
    <label class="label">School Location</label>
    <input class="input " type="text" name='school_location' defaultValue={value.data.school_location} placeholder="e.g Indonesia" onChange={value.handlerChange} />
</div>

  </div>
</div>

<div class="field is-horizontal">
<div class="field-body">
<div class="field date">
<label class="label">FIELD OF STUDY</label>
    <input class="input " type="text" name='school_field' defaultValue={value.data.school_field} placeholder="e.g Indonesia" onChange={value.handlerChange} />
</div>
    <div class="field">
    <label class="label">YEAR OF GRADUATION</label>
    <DatePicker
     selected={value.data.school_graduate}
     onChange={(date) => value.changeDate('school_graduate', date)}
        className='input'
        name='school_graduate'
      />
    </div>
</div>
</div>

  </form>

  <div className='is-flex align-center justify-between'>
    <Link to='/create-cv/experience' className='button is-medium'>Back</Link>
    <Link to='/create-cv/add-more-education' className='button is-primary is-medium'>Continue</Link>
</div>


        </div>
    )
}

export default CvEducation;


