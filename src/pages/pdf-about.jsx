import { Image, Text, View } from '@react-pdf/renderer'
import React, { useContext } from 'react'
import { AppContext } from '../App'
import { style } from './style'


const PdfAbout = ({value}) => {
console.log(typeof value.data.imgUpload)
    return(
    <View style={style.flex_col}>
        <View style={style.flex_between}>
        <View style={[style.flex_co,style.gap_sm]}>
          <Text style={[style.fs_2,style.fw_bold]}>{value.data.fullname}</Text>
        <View style={[style.flex,style.fs_sm,style.txt_grey]}>
          <Text >{value.data.phone} ||</Text> 
          <Text style={style.txt_link}>{value.data.email} ||</Text>
          <Text >linkedin.com/joshuaphua</Text> 
        </View>
        <View style={[style.flex,style.fs_sm]}>
              <Text>{value.data.city}</Text>,
              <Text>{value.data.province}</Text>,
              <Text>{value.data.post}</Text>
       </View>
       <Text style={style.fs_sm}>{value.data.about}</Text>
        </View>
        <Image src={value.data.imgUpload !== '' ? value.data.imgUpload : "https://bulma.io/images/placeholders/128x128.png"} className="avatars is-rounded" style={style.avatar}/>
        </View>
     </View>
    )
}

export default PdfAbout;