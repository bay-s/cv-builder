import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createClient } from 'pexels'; 
import { GetProduct } from './get-data';
import img from '../img/cv.png'
import img2 from '../img/cv.png'
import img3 from '../img/banner2.jpg'
import img4 from '../img/banner.jpg'
import img5 from '../img/test123.png'

const Home = ({data}) => {
  const [image,setImage] = useState([])
  const [product,setProduct] = useState([])
  const client = createClient('563492ad6f917000010000019c8e871dabee4d69b8b2474d22c18a3f');

  useEffect(() => {
    client.photos.curated({ per_page: 10}).then(photo => {
      setImage(photo.photos)
      console.log(photo);
    });

  },[])

  const arr = [img,img2,img3,img4,img5]
    return(
<div className='container is-fullhd' id='container'>

<section class="hero is-large shadow has-background-light">
  <div class="hero-body columns is-multiline  p-6 align-center">
  <div className='column is-6  p-6'>
      <div className='is-flex flex-column gap-2'>
        <h3 className='title is-1 banner-title is-bold'>
        The CV that gets the job (done)
        </h3>
        <p className='subtitle txt-dark lh-base'>
        Standing out. Professional. Recruiter-approved. Ready in minutes with our step-by-step builder.
        </p>
        <Link to='/template' className='button is-primary is-medium w-50'>Create your CV</Link>
      </div>
  </div>
   <div className='column is-6 '>
<figure class="image is-5by4">
  <img src={img} />
</figure>
   </div>
  </div>
</section>

   <section className='columns is-multiline  bg-purple '>
     <div className=' is-flex flex-column mx-auto gap-1 p-6 w-75 text-center'>
      <h3 className='title is-2 txt-white  is-title is-bold'>
      Templates to win recruiters over
      </h3>
      <p className='subtitle is-6 has-text-white-ter is-bold '>
      Wide selection of designs. Carefully optimised for clarity and impact.
One click layouts - no formatting required.
      </p>
     </div>

<div className='column is-12 is-flex align-center gap-2 p-5'>

{
  arr.map(item => {
    return <figure class="images">
  <img src={item} />
</figure>
  })
}

</div>

   </section>
   
</div>
    )

}

export default Home;