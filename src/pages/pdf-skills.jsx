import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { style } from './style'

const PdfSkill = ({value}) => {

    return(
<View style={style.rows}>
	    <Text style={[style.divider, style.fw_bold]}>Skills</Text>
		<View style={style.flex}>	
{value.skills.map((skill, index) => (
<Text>
{skill}{' '}
</Text>
  ))}
	    </View>
</View>
    )
}

export default PdfSkill