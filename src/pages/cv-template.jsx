import React, { useContext, useRef } from 'react'
import { AppContext } from '../App';
import EducationPart from './education-part';
import EducationPart1 from './education-part1';
import ExperiencePart from './experience-part';
import ExperiencePart1 from './experience-part1';


const CvTemplate = ({refs}) => {
const {value} = useContext(AppContext)
const options = { month: 'short', day: '2-digit', year: 'numeric' };
const dates = new Date(value.data.birth_date);
const birth = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');

    return(
<section className='box '  ref={refs} >	
  <div className='is-flex flex-column gap-4'>
        <header className='is-flex flex-column gap-1 border-butt py-2'>
                {/* NAMES */}
<article className='is-flex align-center justify-between'>
  <div className='is-flex align-center gap-2'>
  <h3 className='is-title is-size-4 is-bold'>
                {value.data.firstname === '' ? 'First name' : value.data.firstname}
  </h3>
<h3 className='is-title is-size-4 is-bold'>
            {value.data.surename === '' ? 'Surename' : value.data.surename}
</h3>
  </div>
  <figure class="image is-96x96 avatar">
  <img class="is-rounded" src={value.data.imgUpload !== '' ? value.data.imgUpload : "https://bulma.io/images/placeholders/128x128.png"}  />
       </figure>
 </article>
         {/* END NAMES */}
        {/* SUMMARY */}
<div className='is-flex flex-column gap-1 align-start '>
<h3 className='is-bold is-title '>Summary</h3>
<p className='lh-base txt-small'>
{
				value.data.about === '' ?  'Sumary..'
				: value.data.about
			}
</p>
</div>
   {/* END SUMMARY */}
         {/* ADRESS */}

         <div className='is-flex justify-between align-center'>
        <div className='is-flex flex-column gap-1'>
		<ul className='is-flex align-center gap-2'>
            <h3 className='is-title is-size-7 is-bold'> {value.data.city === '' ? 'City' : value.data.city}</h3>
            <h3 className='is-title is-size-7 is-bold'> {value.data.province === '' ? 'Province' : value.data.province}</h3>
            <h3 className='is-title is-size-7 is-bold'> {value.data.post === '' ? 'Post Code' : value.data.post}</h3>
    </ul>
		 <ul className='is-flex align-center gap-2'>
			<li>
			<h3 className='is-title is-bold txt-small'>Date of birth :</h3>
		   </li>
		   <li>
			<h3 className='txt-small'>{birth}</h3>
		   </li>
		 </ul>
		</div>
		 <ul className='is-flex align-center flex-column'>
<li>
<h3 className='is-title is-size-7 is-bold'>
	{
		value.data.phone === '' ? 'Your phone number' : value.data.phone
	}
</h3>
</li>
<li>
<h3 className='is-title is-size-7 is-bold'>
            <a href='' className='underline'>{value.data.email === '' ? 'Youremail@gmail.com' : value.data.email}</a>
         </h3>
</li>
		 </ul>
         </div>
         {/* END ADRESS */}
        </header>
{/* START JOB EXPERIENCE */}
<article className='is-flex flex-column gap-2'>
				<div className='is-flex align-center gap-1 border-butt py-2'>
				  <i class="fa fa-suitcase " aria-hidden="true"></i>
                  <h3 className=' is-title is-bold'>Job Experience</h3>
				</div>
            <ExperiencePart1 data={value.data} />
            <ExperiencePart data2={value.data2} />
	 </article>
{/* END JOB EXPERIENCE */}
{/* START EDUCATION */}
        <article className='is-flex flex-column gap-1'>
				<div className='is-flex align-center gap-1 border-butt py-2'>
                  <i class="fa fa-university " aria-hidden="true"></i>
                  <h3 className='is-title is-bold'>Education</h3>
				</div>
			 <EducationPart1 data={value.data}/>
			 <EducationPart data2={value.data2}/>
	 </article>
{/* END EDUCATION */}
{/* START SKILL */}
<article className='is-flex flex-column gap-1'>
			<div className='is-flex align-center gap-1  border-butt py-2'>
                <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                <h3 className='is-title is-bold'>Skills</h3>
			 </div>

				<div className='is-flex flex-column gap-1'>
                     <ul className='is-flex align-center flex-wrap gap-4 txt-small is-title dot-list px-4'>
{value.skills.map((skill, index) => (
<li className='' key={index}>
{skill}{' '}
</li>
  ))}
                     </ul>
			    </div>
	 </article>
{/* END SKILL */}
      </div>

</section>	
    )
}

export default CvTemplate

