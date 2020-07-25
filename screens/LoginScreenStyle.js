import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    libg: {
        width:'100%',
        height: 550,
        
    },
    defaultStyle: {
        fontFamily: 'quicksand'
    },


    logobg:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
    },
    logotext:{ 
        width: 100,
        height: 100,
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "center",
        color: "#ffbb3b",

    },
    moviebutton: {
            width: 30,
            height: 30,
    },
    title: {
        width: '30%',
        height: 30,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "left",
        color: "#5a5a5a"   ,
        fontFamily: 'quicksand'
    },
    inputbox : {
        padding: 10,
        borderRadius: 9,
        width: 285,
        height: 42,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        fontFamily: 'quicksand'
    },      
    heading: {
        width: '100%',
        height: 19,
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
        color: "#5a5a5a", 
        fontFamily: 'quicksand'

    },
    noborderlogobox :{
            width: 151,
            height: 152,
            borderRadius: 12,
            marginTop: '30%',
            marginBottom: '10%',
            padding: '10%',
            justifyContent:'space-between',
            alignItems:'center'
    },    
    logobox:{
        width: 170,
        height: 170,
        borderRadius: 14,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 30,
        shadowOpacity: 1,
        marginTop: '30%',
        marginLeft: '30%',
        marginBottom: '5%',
        padding: '5%',
        paddingLeft:'6%',
        justifyContent:'space-between',
        alignItems:'center'
    },
          
});