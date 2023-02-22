import React from 'react'

const CvTemplate2 = () => {

    return(

<div className='columns is-multiline is-centered'>
{/* COL LEFT */}
 <div className='column is-5 has-background-dark'>
<div className='box no-bg is-flex flex-column gap-2 align-center txt-white'>
 <ul className='is-flex flex-column'>
<li> <h3 className='is-bold is-title txt-white is-size-3'>
John
</h3></li>
<li><h3 className='is-bold is-title  txt-white is-size-3'>
Doe
</h3></li>
 </ul>
<figure class="image is-128x128">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
</figure>

</div>

<div className='is-flex flex-column gap-2 align-start p-3 txt-white'>
<h3 className='txt-white is-title border-butt '>Skills </h3>
<ul className='is-flex flex-column gap-1 dot-list px-4'>
 <li className='txt-small'>HTML</li>
 <li className='txt-small'>JAVASCRIPT</li>
 <li className='txt-small'>CSS</li>
 <li className='txt-small'>MySql</li>
 <li className='txt-small'>PHP</li>
</ul>

</div>

 </div>
{/* END COL LEFT */}
{/* START COL RIGHT */}
 <div className='column is-7 box p-5'>
<section className='is-flex flex-column gap-1'>
   {/* ADRESS */}
<ul className='is-flex flex-column align-start'>
   <li className='txt-small is-title'>City, Province, Postal Code</li>
   <li className='txt-small is-title'>(+62) 8958989</li>
   <li className='txt-small is-title'>
      <a href=''>youremail@gmail.com</a>
   </li>
</ul>
   {/* ADRESS */}
   {/* SUMMARY */}
<div className='is-flex flex-column gap-1 align-start p-3 border-butt'>
<h3 className='is-bold is-title '>Summary</h3>
{/* <p className='lh-base txt-small'>
AdBlock is free, user-supported software. It's important to us that anyone can use our software, regardless of whether they can contribute or not. But AdBlock isn't free to operate. We have salaries to pay and infrastructure costs to cover to support our 70 million users worldwide. Thankfully, many users do support AdBlock by contributing what they can afford to help support AdBlock's ongoing development. We couldn't exist without you. If you're able to support us, we'd appreciate it. Every contribution helps!
</p> */}
</div>
   {/* END SUMMARY */}
    {/* START EDUCATION */}
<article className='is-flex flex-column gap-1 my-4'>
				<div className='is-flex align-center gap-1  border-butt'>
                  <i class="fa fa-university " aria-hidden="true"></i>
                  <h3 className='is-title is-bold'>Education</h3>
				</div>

				<div className='is-flex flex-column gap-2'>
                     <ul className='is-flex flex-column gap-1 txt-small is-title'>
                        <li className='is-flex align-center gap-1'>
                            <span className=''>
                            Your school name
                            </span>
                            -
                            <span className=''>
                            Your school name
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
    <article className='is-flex flex-column gap-1 my-4'>
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

      <div className='is-flex flex-column gap-2'>
                     <ul className='is-flex flex-column gap-1 txt-small is-title'>
                        <li className='is-flex align-center'>
                            <span className='is-title is-bold'>
                            Your Job title
                            </span>
                        </li>
                        <li className='is-flex align-center gap-1'>
                            <span className='is-title is-bold'>
                            Company name
                            </span>
                            -
                            <span className=''>
                            Job location
                            </span>
                            -
                            <span className=''>
                            Job Country
                            </span>
                        </li>
                        <li className='is-flex align-center gap-1'>
                            <span className=''>
                        STARTDATE to ENDDATE
                            </span>
                        </li>
                     </ul>
			    </div>


	 </article>
{/* END JOB EXPERIENCE */}
   </section>
 </div>
 {/* END COL RIGHT */}
</div>


    )
}

export default CvTemplate2



