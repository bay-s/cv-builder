import React from 'react'

const CvTemplate2 = ({data,refs,data2}) => {

const date = new Date(data.birth_date);
const options = { month: 'short', day: '2-digit', year: 'numeric' };
const birthDate = date.toLocaleDateString('en-US', options).replace(/\//g, '-');


const datez = new Date(data.end_date);
const endDate = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');

const dates = new Date(data.start_date);
const startDate = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');

    return(
<div className='container red p-3' ref={refs} >

    
<div className='columns is-multiline '>
{/* COL LEFT */}
 <div className='column is-5 has-background-dark'>
 <div className='box no-bg is-flex flex-column  gap-2 align-center txt-white'>
<h3 className='is-bold banner-title txt-white is-size-4'>
   {
      data.firstname === '' ? 'Your First name'
      : data.firstname
   }
   {
      data.surename === '' ? 'Your surename'
      : data.surename
}
</h3>
<figure class="image is-96x96">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
</figure>

<ul className='is-flex flex-column'>
   <li><span className='is-title is-size-7'>Date Of Birth :</span></li>
   <li><span className='is-size-7'>{birthDate}</span></li>
</ul>

<p className='lh-base is-size-7 text-center text-wrap'>
{
   data.about === '' ? 'About yourself'
   : data.about
}
</p>

<div className='is-flex flex-column gap-1 align-center'>
<h3 className='txt-white is-size-4 is-bold is-title  txt-white'>Contact</h3>

<ul className='is-flex flex-column gap-1'>
	<li className='is-flex align-center gap-1'>
		<i className='fa fa-map-marker'></i>
		<span className='is-size-7'>
         {data.city === '' ? 'City' : data.city } ,
         {data.province === '' ? 'Province' : data.province } ,
         {data.post === '' ? 'Post' : data.post } 
      </span>
	</li>
	<li className='is-flex align-center gap-1'>
		<i className='fa fa-phone'></i>
		<span className='is-size-7'>
         {
            data.phone === '' ? 'Your phone number' 
            : data.phone
         }
      </span>
	</li>
	<li className='is-flex align-center gap-1'>
		<i className='fa fa-envelope'></i>
		<span className='underline is-clickable is-size-7'>
      {
            data.email === '' ? 'Your email' 
            : data.email
         }
      </span>
	</li>
	<li className='is-flex align-center gap-1'>
	<i class="fa fa-globe" aria-hidden="true"></i>
		<span className='is-size-7'>Website.com</span>
	</li>
	<li className='is-flex align-center gap-1'>
	<i class="fa fa-github" aria-hidden="true"></i>
		<span className='is-size-7'>Github</span>
	</li>
</ul>

</div>
			 </div>
 </div>
{/* END COL LEFT */}
{/* START COL RIGHT */}
 <div className='column is-7 '>
   <section className='is-flex flex-column gap-4'>
    {/* START EDUCATION */}
    <article className='is-flex flex-column gap-1'>
				<div className='is-flex align-center gap-1  border-butt'>
                  <i class="fa fa-university " aria-hidden="true"></i>
                  <h3 className='is-title is-bold'>Education</h3>
				</div>

				<div className='is-flex flex-column gap-2'>
                     <ul className='is-flex flex-column gap-1 txt-small is-title'>
                        <li className='is-flex align-center gap-1'>
                            <span className=''>
                              {
                                 data.school_name === '' ? 'Your school name'
                                 : data.school_name
                              }
                            </span>
                            -
                            <span className=''>
                            {
                                 data.school_location === '' ? 'Your school name'
                                 :  data.school_location
                              }
                            </span>
                        </li>
                        <li className='is-flex align-center gap-1'>
                            <span className=''> FIELD OF STUDY</span>
                        </li>
                        <li className='is-flex align-center gap-1'>
                            <span className=''>YEAR OF GRADUATION</span>
                        </li>
                     </ul>
			    </div>
	 </article>
{/* END EDUCATION */}
{/* START SKILL */}
    <article className='is-flex flex-column gap-1'>
			<div className='is-flex align-center gap-1  border-butt'>
                <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                <h3 className='is-title is-bold'>Skills</h3>
			 </div>

				<div className='is-flex flex-column gap-2'>
                     <ul className='is-flex align-center flex-wrap gap-1 txt-small is-title dot-list px-4'>
                        <li className=''>
                           HTML
                        </li>
                        <li className=''>
                           CSS
                        </li>
                        <li className=''>
                          PHP
                        </li>
                        <li className=''>
                          BOOTSTRAP
                        </li>
                        <li className=''>
                          JAVASCRIPT
                        </li>
                        <li className=''>
                           JQUERY
                        </li>
                        <li className=''>
                           REACTJS
                        </li>
                        <li className=''>
                           MYSQL
                        </li>
                        <li className=''>
                          REDUX
                        </li>
                     </ul>
			    </div>
	 </article>
{/* END SKILL */}
{/* START JOB EXPERIENCE */}
<article className='is-flex flex-column gap-1'>
				<div className='is-flex align-center gap-1 border-butt'>
				  <i class="fa fa-suitcase " aria-hidden="true"></i>
                  <h3 className=' is-title is-bold'>Job Experience</h3>
				</div>
	{
      data2.job_title.length < 1 ? 
      <div className='is-flex flex-column gap-2'>
                     <ul className='is-flex flex-column gap-1 txt-small is-title'>
                        <li className='is-flex align-center'>
                            <span className='is-title is-bold'>
                              {
                                 data.job_title === '' ? 'Your Job title'
                                 : data.job_title
                              }
                            </span>
                        </li>
                        <li className='is-flex align-center gap-1'>
                            <span className='is-title is-bold'>
                              {
                                 data.employer === '' ? 'Company name'
                                 : data.employer
                              }
                            </span>
                            -
                            <span className=''>
                              {
                                 data.city_job === '' ? 'Job location'
                                 : data.city_job
                              }
                            </span>
                            -
                            <span className=''>
                              {
                                 data.country === '' ? 'Job Country'
                                 : data.country
                              }
                            </span>
                        </li>
                        <li className='is-flex align-center gap-1'>
                            <span className=''>
                           {startDate} to {endDate}
                            </span>
                        </li>
                     </ul>
			    </div>
     :
     data2.job_title.map((el,index) => {
      
const datez = new Date(data2.end_date[index]);
const endDates = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');

const dates = new Date(data2.start_date[index]);
const startDates = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');

      return 	<div className='is-flex flex-column gap-2'>
                     <ul className='is-flex flex-column gap-1 txt-small is-title'>
                        <li className='is-flex align-center'>
                            <span className='is-title is-bold'>
                              {el}
                            </span>
                        </li>
                        <li className='is-flex align-center gap-1'>
                            <span className='is-title is-bold'>
                              { data2.employer[index]}
                            </span>
                            -
                            <span className=''>
                              {data2.city_job[index]}
                            </span>
                            -
                            <span className=''>
                              {data2.country[index]}
                            </span>
                        </li>
                        <li className='is-flex align-center gap-1'>
                            <span className=''>
                           {startDates} to {endDates}
                            </span>
                        </li>
                     </ul>
			    </div>
     })
   }
	 </article>
{/* END JOB EXPERIENCE */}
   </section>
 </div>
 {/* END COL RIGHT */}
</div>

</div>
    )
}

export default CvTemplate2



