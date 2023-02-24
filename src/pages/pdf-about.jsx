import { Image, Text, View } from '@react-pdf/renderer'
import React, { useContext } from 'react'
import { AppContext } from '../App'
import { style } from './style'


const PdfAbout = ({value}) => {
console.log(typeof value.data.imgUpload)
    return(
    <View style={style.flex_col}>
        <View style={style.flex_between}>
        <View style={style.flex}>
          <Text  style={style.fs_2}>{value.data.firstname }</Text>
          <Text style={style.fs_2}>{value.data.surename}</Text>
        </View>
        <Image src={value.data.imgUpload !== '' ? value.data.imgUpload : "https://bulma.io/images/placeholders/128x128.png"} className="avatars is-rounded" style={style.avatar}/>
        </View>
           <Text style={[style.fs_sm,style.p_1]}>{value.data.about}</Text>
     </View>
    )
}

export default PdfAbout;