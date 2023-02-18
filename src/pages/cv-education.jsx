import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const CvEducation = ({data,handlerChange,changeDate}) => {
    const [selectedOption,setSelectedOption] = useState('')
 const education = [
    'SD',
    'SMP',
    'SMA/SMK',
    'University'
 ]
    
const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

    return(
<div className='is-flex flex-column gap-6 p-4'>
            <ul className=''>
                <li><h3 className='is-title is-bold is-size-4'>Let's start with your Education Detail.</h3></li>
                <li><p className='is-title '>Include your full name and at least one way for employers to contact you.</p></li>            
            </ul>

<form className='is-flex flex-column gap-3'>

<div class="field is-horizontal">
<div class="field-body">

<div class="field">
    <label class="label">School Name</label>
    <input class="input " type="text" name='school_name' defaultValue={data.school_name} placeholder="e.g Indonesia" onChange={handlerChange} />
</div>

<div class="field">
    <label class="label">School Location</label>
    <input class="input " type="text" name='school_location' defaultValue={data.school_location} placeholder="e.g Indonesia" onChange={handlerChange} />
</div>

  </div>
</div>

<div class="field is-horizontal">
<div class="field-body">
<div class="field date">
<label class="label">FIELD OF STUDY</label>
    <input class="input " type="text" name='school_field' defaultValue={data.school_field} placeholder="e.g Indonesia" onChange={handlerChange} />
</div>
    <div class="field">
    <label class="label">YEAR OF GRADUATION</label>
    <DatePicker
     selected={data.school_graduate}
     onChange={(date) => changeDate('school_graduate', date)}
        className='input'
        name='school_graduate'
      />
    </div>
</div>
</div>

  </form>


  <div className='is-flex align-center justify-between'>
    <Link to='/create-cv/experience' className='button is-medium'>Back</Link>
    <Link to='/create-cv/experience' className='button is-primary is-medium'>Continue</Link>
  </div>
        </div>
    )
}

export default CvEducation;


