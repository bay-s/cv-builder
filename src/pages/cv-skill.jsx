import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CvSkills  = ({data,addSkill,deleteSkill,getInputSkill}) => {

    

const [skills, setSkills] = useState([
  
]);
const [newSkill, setNewSkill] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  setSkills([...skills, newSkill]);
  setNewSkill('');
};

const handleChange = (e) => {
  setNewSkill(e.target.value);
};

const handleDelete = (index) => {
  const updatedSkills = [...skills];
  updatedSkills.splice(index, 1);
  setSkills(updatedSkills);
  console.log(skills);
};


    return(
<div className='is-flex flex-column gap-6 p-4'>
            <ul className=''>
                <li><h3 className='is-title is-bold is-size-4'>Let's start with your Skills.</h3></li>
                <li><p className='is-title '>Include your full name and at least one way for employers to contact you.</p></li>            
            </ul>

<form className='is-flex flex-column gap-3' onSubmit={handleSubmit}>

<div class="field has-addons">
  <div class="control w-100">
    <input class="input" type="text" 
        onChange={handleChange} placeholder="Add Skills" />
  </div>
  <div class="control">
    <button type='submit' class="button is-info">
       Add Skill
    </button>
  </div>
</div>
{/* SKILLS OUTPUT */}
<ul className='is-flex align-center gap-1 flex-wrap'>
{skills.map((skill, index) => (
 <span class="tag is-info">
 {skill}{' '}
  <button class="delete is-small"  onClick={() => handleDelete(index)}></button>
</span>
  ))}
</ul>
{/* END SKILLS */}
</form>


  <div className='is-flex align-center justify-between'>
    <Link to='/create-cv/experience' className='button is-medium'>Back</Link>
    <Link to='/create-cv/skills' className='button is-primary is-medium'>Continue</Link>
  </div>
        </div>
    )
}

export default CvSkills;

