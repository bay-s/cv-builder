import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import PdfEducationPart1 from './pdf-education-part1'
import PdfEducationPart2 from './pdf-education-part2'
import { style } from './style'


const PdfEducation = ({value}) => {

    return(
<View style={style.rows}>
	    <Text style={style.divider}>Education</Text>
		<PdfEducationPart1 value={value} />
 <PdfEducationPart2 value={value} />
</View>
    )
}

export default  PdfEducation 