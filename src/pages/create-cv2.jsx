import React from 'react'
import CvExperience from './cv-experience'
import CvRightPage from './cv-template'


const CreateCv2 = ({handlerChange,datas,method}) => {
console.log(method);
    return(
        <div id="container" class="container">
           <div className='columns is-multiline'>
              <div className='column is-6 card'>
         <CvExperience  handlerChange={handlerChange} datas={datas} method={method}/>
              </div>
              <div className='column is-6 p-5'>
              <button className='button is-title is-bold mb-2 navbar-end' >SAVE CV</button>
              <section className='cv-preview'>
          <CvRightPage  data={datas} />
              </section>
              </div>
        
           </div>
        </div>
        
            )
}

export default CreateCv2