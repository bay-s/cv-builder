import React, { useContext } from 'react'
import { AppContext } from '../App';
import EducationPart from './education-part';
import EducationPart1 from './education-part1';
import ExperiencePart from './experience-part';
import ExperiencePart1 from './experience-part1';


const CvTemplate2 =  ({refs}) => {
   const {value} = useContext(AppContext)
   const options = { month: 'short', day: '2-digit', year: 'numeric' };
   const dates = new Date(value.data.birth_date);
   const birth = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');
   
    return(

<div className='columns is-multiline is-centered'>
{/* COL LEFT */}
 <div className='column is-5 has-background-dark'>
<div className='box no-bg is-flex flex-column gap-1 align-center txt-white'>
 <ul className='is-flex flex-column'>
<li> 
<h3 className='is-bold is-title txt-white is-size-3'>
{value.data.firstname === '' ? 'First name' : value.data.firstname}
</h3>
</li>
<li>
<h3 className='is-bold is-title  txt-white is-size-3'>
{value.data.surename === '' ? 'Surename' : value.data.surename}
</h3>
</li>
 </ul>
<figure class="image is-128x128 avatar">
<img class="is-rounded" src={value.data.imgUpload !== '' ? value.data.imgUpload : "https://bulma.io/images/placeholders/128x128.png"}  />
</figure>

</div>

<div className='is-flex flex-column gap-2 align-start p-3 txt-white'>
<h3 className='txt-white is-title border-butt '>Skills </h3>
<ul className='is-flex flex-column gap-1 dot-list px-4 is-size-7'>
{
value.skills.map((skill, index) => (
<li className='' key={index}>
{skill}{' '}
</li>
))
}
</ul>

</div>

 </div>
{/* END COL LEFT */}
{/* START COL RIGHT */}
 <div className='column is-7 box p-5'>
<section className='is-flex flex-column gap-1'>
   {/* ADRESS */}
<ul className='is-flex flex-column align-start'>
   <li className='txt-small is-title'>
   {value.data.city === '' ? 'City' : value.data.city} ,
   {value.data.province === '' ? 'Province' : value.data.province} , 
   {value.data.post === '' ? 'Post Code' : value.data.post}
   </li>
   <li className='txt-small is-title'>
   {
		value.data.phone === '' ? 'Your phone number' : value.data.phone
	}
   </li>
   <li className='txt-small is-title'>
      <a href='' className='underline'>{value.data.email === '' ? 'Youremail@gmail.com' : value.data.email}</a>
   </li>
<li className='is-flex align-center gap-1'>
<span className='is-title'>Date of birth :</span>
<span className=''>{birth}</span>
</li>
</ul>

   {/* ADRESS */}
   {/* SUMMARY */}
<div className='is-flex flex-column gap-1 align-start p-3 border-butt'>
<h3 className='is-bold is-title '>Summary</h3>
<p className='lh-base txt-small'>
{
				value.data.about === '' ?  'Sumary..'
				: value.data.about
}
</p>
</div>
   {/* END SUMMARY */}
    {/* START EDUCATION */}
<article className='is-flex flex-column gap-1 my-4'>
				<div className='is-flex align-center gap-1  border-butt'>
                  <i class="fa fa-university " aria-hidden="true"></i>
                  <h3 className='is-title is-bold'>Education</h3>
				</div>
          <EducationPart1 data={value.data}/>
			 <EducationPart data2={value.data2}/>
	 </article>
{/* END EDUCATION */}
{/* START JOB EXPERIENCE */}
<article className='is-flex flex-column gap-1'>
				<div className='is-flex align-center gap-1 border-butt'>
				  <i class="fa fa-suitcase " aria-hidden="true"></i>
                  <h3 className=' is-title is-bold'>Job Experience</h3>
				</div>
            <ExperiencePart1 data={value.data} />
            <ExperiencePart data2={value.data2} />
	 </article>
{/* END JOB EXPERIENCE */}
   </section>
 </div>
 {/* END COL RIGHT */}
</div>


    )
}

export default CvTemplate2



