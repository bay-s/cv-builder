import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { style } from './style'


const PdfEducationPart2 = ({value}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const datez = new Date(value.data.school_graduate);
    const graduate  = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');
    return(
<View style={[style.flex_col,style.gap_sm]}>

<View style={style.flex_between}>

<View style={[style.flex,style.gap_sm,style.align_center,style.fs_xs]}>
 <Text>{value.data.school_name}</Text>
 <Text>-</Text>
 <Text>{value.data.school_location}</Text>
</View>
<Text style={[style.fs_sm,style.fw_bold]}>{graduate }</Text>

</View>

<Text style={[style.fs_sm,style.fw_bold]}>{value.data.school_field}</Text>


 </View>
    )
}

export default PdfEducationPart2



