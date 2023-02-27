import React, { useContext } from 'react'
import akun from '../img/akun.jpg'
import { Page,Document, PDFViewer, View, Text, Image} from '@react-pdf/renderer';
import { AppContext } from '../App';
import { style } from './style';
import PdfExperience from './pdf-experience';
import PdfEducation from './pdf-education';
import PdfSkill from './pdf-skills';
import PdfAdress from './pdf-adress';


const  CvPage2 = () =>  {
	const {value} = useContext(AppContext)
   const styles = {
	  viewer: {
		height: window.innerHeight,
		width:1154, //the pdf viewer will take up all of the width and height
	  },
	  page: {
		backgroundColor: "#fff",
		color: "black",
		flexDirection:'row',
	  },
	  left:{
		backgroundColor:'hsl(0, 0%, 21%)',
		width:'35%',
		height:'100%',
		flexDirection:'column',
		alignItems:'center',
		gap:10,
		color:'white',
		padding:15
	  },
	  right:{
		width:'65%',
	  },
	  flex_col:{
		flexDirection:'column',
	  },
	  avatar:{
		width:128,
		height:128,
		'object-fit':'contain',
		borderRadius:'50%',
		objectFit:'cover'
	},
	flex:{
		flexDirection:'row',
		gap:10,
		alignItems:'center',
		flexWrap:'wrap'
	}
   }

	return (
<div className='container mx-auto' id='container'>
   <div className='cv-container'>
<PDFViewer style={styles.viewer} className='pdf-viewer'>
{/* Start of the document*/}
<Document>
{/*render a single page*/}
<Page size="A4" style={styles.page} className='test'>

  <View style={[styles.left,style.gap_2]}>
     
  <View style={[style.flex_col,style.align_center,style.gap_1]}>
        <View style={style.flex}>
   <Text  style={style.fw_2}>{value.data.firstname }</Text>
   <Text style={style.fw_2}>{value.data.surename}</Text>
        </View>
<Image src={value.data.imgUpload !== '' ? value.data.imgUpload : "https://bulma.io/images/placeholders/128x128.png"} className="avatars is-rounded" style={style.avatar}/>
  </View>

  <View style={[style.flex_col,style.align_start,style.gap_1]}>
{/* START SKILLS */}
<PdfSkill value={value}/>
{/* END SKILLS */}
<Text style={style.fs_sm}>{value.data.about}</Text>
  </View>

  </View>
  {/* END LEFT */}
  <View style={[style.flex_col,style.gap_2,style.p_1,style.fs_sm,styles.right]}>
{/* HEADER */}
<PdfAdress value={value} />
{/* END HEADER */}

{/* JOB EXPERIENCE */}
<PdfExperience value={value} />
{/* ENDJOB EXPERIENCE */}
{/* START EDUCATION */}
<PdfEducation value={value}/>
{/* END EDUCATION */}
  </View>

</Page>

</Document>
</PDFViewer>
   </div>
</div>
	);
  }

export default CvPage2





