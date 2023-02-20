import React, { useContext } from 'react'
import akun from '../img/akun.jpg'
import { Page,Document, PDFViewer} from '@react-pdf/renderer';
import { style } from './style';
import PdfAbout from './pdf-about';
import PdfAdress from './pdf-adress';
import { AppContext } from '../App';
import PdfExperience from './pdf-experience';
import PdfEducation from './pdf-education';
import PdfSkill from './pdf-skills';


const  CvPage = () =>  {
	const {value} = useContext(AppContext)

	return (
<div className='container' id='container'>
<PDFViewer style={style.viewer}>
{/* Start of the document*/}
<Document>
{/*render a single page*/}
<Page size="A4" style={style.page}>
{/* ABOUT */}
<PdfAbout value={value} />
 {/* END ABOUT */}
 {/* ADRESS */}
<PdfAdress value={value} />
{/* END ADRESS */}
{/* JOB EXPERIENCE */}
<PdfExperience value={value} />
{/* ENDJOB EXPERIENCE */}
{/* START EDUCATION */}
<PdfEducation value={value}/>
{/* END EDUCATION */}
{/* START SKILLS */}
<PdfSkill value={value}/>
{/* END SKILLS */}
		  </Page>
</Document>
</PDFViewer>
</div>
	);
  }

export default CvPage



