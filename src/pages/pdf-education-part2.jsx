import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { style } from './style'


const PdfEducationPart2 = ({value}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const datez = new Date(value.data.school_graduate);
    const graduate  = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');
    return(
<View style={[style.flex_between,style.fs_sm]}>
        <View style={style.flex_col}>
        <View style={style.flex}>
          <Text>YEAR OF GRADUATION</Text>
          <Text>-</Text>
          <Text>{graduate}</Text>
        </View>
        <View style={style.flex}>
          <Text>School Location</Text>
          <Text>-</Text>
          <Text>{value.data.school_location}</Text>
        </View>
        </View>
        <View style={style.flex_col}>
           <Text>{value.data.school_name}</Text>
           <Text>{value.data.school_field}</Text>
        </View>
 </View>
    )
}

export default PdfEducationPart2