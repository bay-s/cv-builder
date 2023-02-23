import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import PdfExperiencePart1 from './pdf-experience-part1'
import PdfExperiencePart2 from './pdf-experience-part2'
import { style } from './style'


const PdfExperience  = ({value}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const datez = new Date(value.data.end_date);
    const endDate = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');
    
    const dates = new Date(value.data.start_date);
    const startDate = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');

    return(
<View style={[style.flex_col,style.gap_1]}>
	<Text style={style.divider}>Work Experience</Text>
	<PdfExperiencePart1 value={value} />
    <PdfExperiencePart2 value={value}/>
</View>
    )
}

export default PdfExperience