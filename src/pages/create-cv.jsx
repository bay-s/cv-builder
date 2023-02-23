import React, { useContext, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import akun from '../img/akun.jpg'
import CvExperience from './cv-experience'
import CvHeader from './cv-header'
import CvPage from './cv-page'
import CvEducation from './cv-education'
import html2canvas from "html2canvas";
import jsPdf from 'jspdf'
import CvTemplate2 from './cv-template2'
import CvSkills from './cv-skill'
import AddMoreEducation from './add-more-edu'
import AddMoreExperience from './add-more-exp'
import CvTemplate from './cv-template'
import { AppContext } from '../App'


const CreateCv = ({Props,method}) => {
    const {id} = useParams()
    const string_id = id.toString().toLowerCase()
    const {value} = useContext(AppContext)

 console.log(value.data.template);   
// PRINT FUNCTION
const input = useRef(null);
const exportPdf = () => {
	html2canvas(input.current, {
    logging: true,
    letterRendering: 1,
    useCORS: true,
    preserveObjectStacking: true
    }).then(canvas => {
	  // const imgWidth = 200;
	  // const imgHeight = canvas.height * imgWidth / canvas.width;
	  // const imgData = canvas.toDataURL('image/png');
	  // const pdf = new jsPdf('p', 'mm', 'a4');
    // pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    const pdf = new jsPdf();
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
	  pdf.save('invoice.pdf');
	});
  }
 
// END PRINT FUNC

let component;
switch (string_id) {
  case 'header':
    component = <CvHeader  />;
    break;
  case 'experience':
    component = <CvExperience />;
    break;
  case 'education':
    component = <CvEducation />;
    break;
    case 'add-more-education':
        component = <AddMoreEducation />;
    break;
    case 'add-more-experience':
        component = <AddMoreExperience  />;
    break;
  default:
    component = null;
}

let template;
switch (value.data.template) {
  case 'template0':
    template = <CvTemplate  refs={ input } />;
    break;
  case 'template1':
    template = <CvTemplate2 refs={ input } />;
    break;
  default:
    template = null;
}

    return(
<div id="container" class="container">
   <div className='columns is-multiline my-5'>
   <div className='column is-6 card'>
{component}
      </div>
      <div className='column is-6 cv-preview'>
      {/* <button className='button is-title is-bold mb-2 navbar-end' onClick={() => exportPdf()}>SAVE CV</button> */}
      <section className='px-3'>
{template}
      </section>
</div>
   </div>
</div>

    )
}

export default CreateCv