import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import akun from '../img/akun.jpg'
import CvExperience from './cv-experience'
import CvHeader from './cv-header'
import CvPage from './cv-page'
import CvEducation from './cv-education'
import CvRightPage from './cv-right-page'
import html2canvas from "html2canvas";
import jsPdf from 'jspdf'


const CreateCv = ({handlerChange,datas,method,changeDate}) => {
    const {id} = useParams()
    const string_id = id.toString().toLowerCase()
    
    
// PRINT FUNCTION
const input = useRef(null);
const exportPdf = () => {
	html2canvas(input.current, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
	  const imgWidth = 200;
	  const imgHeight = canvas.height * imgWidth / canvas.width;
	  const imgData = canvas.toDataURL('image/png');
	  const pdf = new jsPdf('p', 'mm', 'a4');
	  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
	  pdf.save('invoice.pdf');
	});
  }
 
// END PRINT FUNC
    return(
<div id="container" class="container">
   <div className='columns is-multiline'>
   <div className='column is-6 card'>
{
    string_id === 'header' ? <CvHeader  changeDate={ changeDate} data={datas} handlerChange={handlerChange}/> : ''
}
{
    string_id === 'experience' ?   <CvExperience  changeDate={changeDate } handlerChange={handlerChange} datas={datas} method={method}/> : ''
}
{
    string_id === 'education' ?   <CvEducation  handlerChange={handlerChange} data={datas}  changeDate={ changeDate}/> : ''
}
      </div>
      <div className='column is-6 p-5'>
      <button className='button is-title is-bold mb-2 navbar-end' onClick={() => exportPdf()}>SAVE CV</button>
      <section className='cv-preview'>
      <CvRightPage data={datas} refs={input}/>
      </section>
</div>
   </div>
</div>

    )
}

export default CreateCv