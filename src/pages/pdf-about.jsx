import { Text, View } from '@react-pdf/renderer'
import React, { useContext } from 'react'
import { AppContext } from '../App'
import { style } from './style'


const PdfAbout = ({value}) => {

    return(
    <View style={style.flex_col}>
        <View style={style.flex}>
          <Text>{value.data.firstname }</Text>
           <Text>{value.data.surename}</Text>
       </View>
           <Text>{value.data.about}</Text>
     </View>
    )
}

export default PdfAbout;