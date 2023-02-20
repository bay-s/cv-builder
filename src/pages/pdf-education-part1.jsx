import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { style } from './style'


const PdfEducationPart1 = ({value}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return(

value.data2.school_name.map((el,index) => {
    const datez = new Date(value.data2.school_graduate[index]);
    const graduate  = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');

			return <View style={[style.flex_between,style.fs_sm]}>
		  <View style={style.flex_col}>
		  <View style={style.flex}>
			<Text>YEAR OF GRADUATION</Text>
			<Text>-</Text>
			<Text>{graduate}</Text>
		  </View>
		  <View style={style.flex}>
			<Text>School Location</Text>
			<Text>-</Text>
			<Text>{value.data2.school_location[index]}</Text>
		  </View>
		  </View>
		  <View style={style.flex_col}>
		     <Text>{value.data2.school_name[index]}</Text>
		     <Text>{value.data2.school_field[index]}</Text>
		  </View>
	    </View>
})
		
    )
}

export default PdfEducationPart1 