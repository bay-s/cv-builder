
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
	section:{

	},
	section_inner:{
		flexDirection:'row',
		justifyContent:'space-between',
		borderBottom:1,
		borderBottomColor:'grey',
		alignItems:'center'
	},
	viewer: {
	  width:window.innerWidth, //the pdf viewer will take up all of the width and height
	  height: window.innerHeight,
	},
	section_col:{
		flexDirection:'column',
		gap:10,
		marginBottom:10
	},
	rows:{
		flexDirection:'column',
		gap:10,
	},divider:{
		paddingBottom:10,
		borderBottom:1,
		borderBottomColor:'grey',
	},
	flex_between:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	},flex:{
		flexDirection:'row',
		gap:10,
		alignItems:'center',
		flexWrap:'wrap'
	},flex_col:{
		flexDirection:'column',
		gap:10,
	},
    fs_sm:{
        fontSize:12
    },
    fs_7:{
        fontSize:14
    },   
    fs_6:{
        fontSize:16
    },
    fs_5:{
        fontSize:18
    },
    fs_4:{
        fontSize:20
    },
    fs_3:{
        fontSize:24
    },
    fs_2:{
        fontSize:28
    },
    fs_1:{
        fontSize:32
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
    }
  });
  
