import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { style } from './style'


const PdfEducationPart1 = ({value}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return(

value.data2.school_name.map((el,index) => {
    const datez = new Date(value.data2.school_graduate[index]);
    const graduate  = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');

			return <View style={[style.flex_col,style.gap_sm]}>

			<View style={style.flex_between}>
			
			<View style={[style.flex,style.gap_sm,style.align_center,style.fs_xs]}>
			 <Text>{value.data2.school_name[index]}</Text>
			 <Text>-</Text>
			 <Text>{value.data2.school_location[index]}</Text>
			</View>
			<Text style={[style.fs_sm,style.fw_bold]}>{graduate }</Text>
			
			</View>
			
			<Text style={[style.fs_sm,style.fw_bold]}>{value.data2.school_field[index]}</Text>
			
			
			 </View>
})
		
    )
}

export default PdfEducationPart1 