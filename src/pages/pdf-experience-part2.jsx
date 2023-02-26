import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { style } from './style'


const PdfExperiencePart2  = ({value}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };

    return(
value.data2.job_title.map((el,index) => {
    const datez = new Date(value.data2.end_date[index]);
    const endDate = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');
    
    const dates = new Date(value.data2.start_date[index]);
    const startDate = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');

    return <View style={[style.flex_col,style.gap_sm]}>

    <View style={style.flex_between}>
    
    <Text style={[style.fs_sm,style.fw_bold]}>{value.data2.employer[index]}</Text>
    <View style={[style.flex,style.gap_sm,style.align_center,style.fs_xs]}>
     <Text>{startDate}</Text>
     <Text>To</Text>
     <Text>{endDate}</Text>
    </View>
    
    </View>
    
    <View style={style.flex_between}>
    
    <Text style={[style.fs_sm,style.fw_bold]}>{el}</Text>
    <View style={[style.flex,style.gap_sm,style.align_center,style.fs_xs]}>
      <Text>{value.data2.city_job[index]}</Text>
      <Text>-</Text>
      <Text>{value.data2.country[index]}</Text>
    </View>
    
    </View>
    
    </View>
        
})
    )
}

export default PdfExperiencePart2


