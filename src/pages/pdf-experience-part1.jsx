import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { style } from './style'


const PdfExperiencePart1  = ({value}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const datez = new Date(value.data.start_date);
    const startDate = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');

    const dates = new Date(value.data.end_date);
    const endDate = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');

    return(
<View style={[style.flex_col,style.gap_sm]}>

<View style={style.flex_between}>

<Text style={[style.fs_sm,style.fw_bold]}>{value.data.job_title}</Text>
<View style={[style.flex,style.gap_sm,style.align_center,style.fs_xs]}>
 <Text>{startDate}</Text>
 <Text>To</Text>
 <Text>{endDate}</Text>
</View>

</View>

<View style={style.flex_between}>

<Text style={[style.fs_sm,style.fw_bold]}>{value.data.employer}</Text>
<View style={[style.flex,style.gap_sm,style.align_center,style.fs_xs]}>
  <Text>{value.data.city_job}</Text>
  <Text>-</Text>
  <Text>{value.data.country}</Text>
</View>

</View>

</View>



    )
}

export default PdfExperiencePart1


