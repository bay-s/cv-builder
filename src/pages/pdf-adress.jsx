import { Text, View } from '@react-pdf/renderer'
import React, { useContext } from 'react'
import { style } from './style'

const PdfAdress = ({value}) => {
const options = { month: 'short', day: '2-digit', year: 'numeric' };
const dates = new Date(value.data.birth_date);
const birth = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');

    return(
<View style={style.section_inner}>
        <View style={style.section_col}>
        <View style={style.flex}>
              <Text>{value.data.city}</Text>,
              <Text>{value.data.province}</Text>,
              <Text>{value.data.post}</Text>
       </View>
       <View style={style.flex}>
              <Text>Birth of Date :</Text>
              <Text>{birth}</Text>
       </View>
       </View>
          <View style={style.section_col}>
              <Text>{value.data.phone}</Text>
              <Text>{value.data.email}</Text>
          </View>
</View>
    )
}

export default PdfAdress