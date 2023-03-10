
import {StyleSheet } from '@react-pdf/renderer';

export const style = StyleSheet.create({
	page: {
	  backgroundColor: "#fff",
	  color: "black",
	  flexDirection:'column',
	  gap:35,
	  marginVertical:25,
	  paddingHorizontal: 30,
	},
	section_inner:{
		flexDirection:'row',
		justifyContent:'space-between',
		borderBottom:1,
		borderBottomColor:'grey',
		alignItems:'center'
	},
	viewer: {
	  height: window.innerHeight,
	  width:1154, //the pdf viewer will take up all of the width and height
	},
	section_col:{
		flexDirection:'column',
		gap:10,
		marginBottom:10
	},divider:{
		paddingBottom:10,
		borderBottom:1,
		borderBottomColor:'grey',
	},
	flex_between:{
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},flex:{
		display:'flex',
		flexDirection:'row'
	},flex_col:{
		flexDirection:'column',
	},
	align_center:{
		alignItems:'center'
	},
	align_start:{
		alignItems:'flex-start'
	},
	align_end:{
		alignItems:'flex-end'
	},
	fs_xs:{
        fontSize:8,
		lineHeight:1.5,
		fontWeight:'normal'
	},
    fs_sm:{
        fontSize:10,
		lineHeight:1.5,
		fontWeight:'normal'
    },
    fs_7:{
        fontSize:12
    },   
    fs_6:{
        fontSize:14
    },
    fs_5:{
        fontSize:16
    },
    fs_4:{
        fontSize:18
    },
    fs_3:{
        fontSize:20
    },
    fs_2:{
        fontSize:22
    },
    fs_1:{
        fontSize:24
    },
    lh_base:{
        lineHeight:1.5
    },
    lh_sm:{
        lineHeight: 1.25
    },
    lh_lg:{
        lineHeight: 2
    },
    fw_bold:{
        fontWeight:'bold'
    },
    fw_light:{
        fontWeight:'lighter' 
    },
	avatar:{
		width:96,
		height:96,
		'object-fit':'contain',
		borderRadius:'50%',
		objectFit:'cover'
	},
	gap_sm:{
		gap:6
	},
	gap_1:{
		gap:15
	},
	gap_2:{
		gap:30
	},
	gap_3:{
		gap:45
	},
	gap_4:{
		gap:60,
	},
	gap_4:{
		gap:75,
	},
	p_1:{
		padding:15
	},
	p_2:{
		padding:30
	},
	p_3:{
		padding:45
	},
	p_4:{
		padding:60
	},
	p_5:{
		padding:75
	},
	px_1:{
		paddingHorizontal:15
	},
	px_2:{
		paddingHorizontal:30
	},
	px_3:{
		paddingHorizontal:45
	},
	px_4:{
		paddingHorizontal:60
	},
	px_5:{
		paddingHorizontal:75
	},
	py_1:{
		paddingVertical:15
	},
	py_2:{
		paddingVertical:30
	},
	py_3:{
		paddingVertical:45
	},
	py_4:{
		paddingVertical:60
	},
	py_5:{
		paddingVertical:75
	},
	w_100:{
	width:'100%'
	},
	txt_link:{
		color:'hsl(204, 86%, 53%)'
	},
	txt_grey:{
		color:'hsl(0, 0%, 48%)'
	}
  });
  
