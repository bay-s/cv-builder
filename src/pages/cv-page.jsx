import React from 'react'
import akun from '../img/akun.jpg'

const CvPage = () => {

    return(

    <div className='column is-10 mx-auto'>

		<div className='columns is-multiline'>
          <div className='column is-4 has-background-dark'>
			 <div className='box no-bg is-flex flex-column  gap-2 align-center txt-white'>
				 <h3 className='title is-bold banner-title is-2 txt-white'>John Doe</h3>

<figure class="image is-128x128">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
</figure>

<p className='lh-base txt-small text-center'>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et similique quia, labore aut quisquam cumque, inventore molestiae error cupiditate iure repellat atque. Molestias in tempore quod quia dignissimos nostrum. Mollitia sit fugiat inventore magni! Corrupti eaque harum facilis dignissimos, et modi aut quam ratione similique, tempore doloremque quis, dolorem pariatur.
</p>

<div className='is-flex flex-column gap-1 align-center'>
<h3 className='title is-bold is-title is-4 txt-white'>John Doe</h3>
<ul className='is-flex flex-column gap-1 '>
	<li className='is-flex align-center gap-2'>
		<i className='fa fa-map-marker'></i>
		<span className=''>Adress, City , Country</span>
	</li>
	<li className='is-flex align-center gap-2'>
		<i className='fa fa-phone'></i>
		<span className=''>(+62) 89 644 81 4801</span>
	</li>
	<li className='is-flex align-center gap-2'>
		<i className='fa fa-envelope'></i>
		<span className='underline is-clickable'>tebox265@gmail.com</span>
	</li>
	<li className='is-flex align-center gap-2'>
	<i class="fa fa-globe" aria-hidden="true"></i>
		<span className=''>Website.com</span>
	</li>
	<li className='is-flex align-center gap-2'>
	<i class="fa fa-github" aria-hidden="true"></i>
		<span className=''>Github</span>
	</li>
</ul>
</div>
			 </div>
		  </div>
		  <div className='column card'>
			<div className='box no-bg is-flex flex-column gap-4'>

            <section className='is-flex flex-column gap-1'>

				<div className='is-flex align-center gap-1 border-butt'>
				  <i class="fa fa-university is-size-4" aria-hidden="true"></i>
                  <h3 className='title is-title is-bold'>Education</h3>
				</div>

				  <ul className='is-flex align-center flex-column gap-3'>
                    <li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>24 juni 2006</span>
					  <div className='is-flex flex-column'>
						<h4 className='is-title is-bold'>Master Degree</h4>
						<span>Lorem ipsum</span>
					  </div>
					</li>

					<li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>24 juni 2006</span>
					  <div className='is-flex flex-column'>
						<h4 className='is-title is-bold'>Master Degree</h4>
						<span>Lorem ipsum</span>
					  </div>
					</li>

				  </ul>
				</section>

	<section className='is-flex flex-column gap-1'>
				<div className='is-flex align-center gap-1 border-butt'>
				  <i class="fa fa-lightbulb-o is-size-4" aria-hidden="true"></i>
                  <h3 className='title is-title is-bold'>Skills</h3>
				</div>

			  <div className='is-flex align-items gap-7'>
			  <ul className='is-flex align-center flex-column gap-1'>
			  <li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>HTML</span>
					</li>
					<li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>CSS</span>
					</li>
                    <li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>Javascript</span>
					</li>
			  </ul>

			  <ul className='is-flex align-center flex-column gap-1'>
			  <li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>PHP</span>
					</li>
					<li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>Bootstrap</span>
					</li>
                    <li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>MySql</span>
					</li>
			  </ul>

			  <ul className='is-flex align-center flex-column gap-1'>
			  <li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>Reactjs</span>
					</li>
					<li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>Firebase</span>
					</li>
                    <li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>MySql</span>
					</li>
			  </ul>

			  </div>

	 </section>

	 <section className='is-flex flex-column gap-1'>
				<div className='is-flex align-center gap-1 border-butt'>
				  <i class="fa fa-suitcase is-size-4" aria-hidden="true"></i>
                  <h3 className='title is-title is-bold'>Job Experience</h3>
				</div>

				<ul className='is-flex align-center flex-column gap-3'>
                    <li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>24 juni 2006 - 24 juni 2012</span>
					  <div className='is-flex flex-column'>
						<h4 className='is-title is-bold'>Backend Developer</h4>
						<span>Lorem ipsum bla bla</span>
					  </div>
					</li>

					<li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>24 juni 20012 - 24 juni 2022</span>
					  <div className='is-flex flex-column'>
						<h4 className='is-title is-bold'>ReactJS front end Developer</h4>
						<span>Lorem ipsum bla bla</span>
					  </div>
					</li>

					<li className='is-flex align-start w-100 gap-7'>
					  <span className='is-title'>24 juni 20012 - 24 juni 2022</span>
					  <div className='is-flex flex-column'>
						<h4 className='is-title is-bold'>ReactJS front end Developer</h4>
						<span>Lorem ipsum bla bla</span>
					  </div>
					</li>
					
				</ul>

	 </section>

			</div>
		  </div>
		</div>

	</div>

    )
}

export default CvPage