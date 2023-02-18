import React, { useRef } from 'react'


const CvRightPage = ({data,refs}) => {

const date = new Date(data.start_date);
const options = { month: 'short', day: '2-digit', year: 'numeric' };
const startDate = date.toLocaleDateString('en-US', options).replace(/\//g, '-');

const datez = new Date(data.end_date);
const endDate = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');

const dates = new Date(data.birth_date);
const birth = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');

const dates1 = new Date(data.school_graduate);
const schoolDate = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');
    return(
        <div className='box is-flex flex-column gap-4'  ref={refs}>
        <header className='is-flex flex-column gap-2'>
                {/* NAMES */}
         <ul className='is-flex align-center gap-2'>
            <h3 className='is-title is-size-4 is-bold'>
                {data.firstname === '' ? 'First name' : data.firstname}
            </h3>
            <h3 className='is-title is-size-4 is-bold'>
            {data.surename === '' ? 'Surename' : data.surename}
            </h3>
         </ul>
         {/* END NAMES */}
		 <p className='lh-base is-title is-size-7'>
			{
				data.about === '' ?  'Write something about yourself...'
				: data.about
			}
		 </p>
         {/* ADRESS */}
         <div className='is-flex justify-between align-center'>
        <div className='is-flex flex-column gap-1'>
		<ul className='is-flex align-center gap-2'>
            <h3 className='is-title is-size-7 is-bold'> {data.city === '' ? 'City' : data.city}</h3>
            <h3 className='is-title is-size-7 is-bold'> {data.province === '' ? 'Province' : data.province}</h3>
            <h3 className='is-title is-size-7 is-bold'> {data.post === '' ? 'Post Code' : data.post}</h3>
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
		data.phone === '' ? 'Your phone number' : data.phone
	}
</h3>
</li>
<li>
<h3 className='is-title is-size-7 is-bold'>
            <a href='' className='underline'>{data.email === '' ? 'Youremail@gmail.com' : data.email}</a>
         </h3>
</li>
		 </ul>
         </div>
         {/* END ADRESS */}
        </header>
{/* START JOB EXPERIENCE */}
<article className='is-flex flex-column gap-1'>
				<div className='is-flex align-center gap-1 border-butt'>
				  <i class="fa fa-suitcase " aria-hidden="true"></i>
                  <h3 className=' is-title is-bold'>Job Experience</h3>
				</div>

             <div className='is-flex align-start justify-between'>
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
				</ul>
				<ul className='is-flex flex-column'>
				<li className='is-flex align-start flex-column'>
				 <h4 className='is-title is-bold'>
							{
								data.job_title === '' ? 'Your job title'
								: data.job_title
							}
				</h4>
				<span className='is-title '>
					  {
						!data.employer ? 'Company name'
						: data.employer
					  }
					  </span>
				 </li>
				</ul>
			 </div>
	 </article>
{/* END JOB EXPERIENCE */}
{/* START EDUCATION */}
        <article className='is-flex flex-column gap-1'>
				<div className='is-flex align-center gap-1 border-butt'>
                  <i class="fa fa-university " aria-hidden="true"></i>
                  <h3 className='is-title is-bold'>Education</h3>
				</div>

				<div className='is-flex align-start justify-between'>
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
	 </article>
{/* END EDUCATION */}

      </div>
    )
}

export default CvRightPage