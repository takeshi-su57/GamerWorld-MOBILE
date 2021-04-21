import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        width: '100%',
        height: 60,
        backgroundColor: '#B40486',
        position: 'absolute',
        bottom: 0,
        paddingRight: 30,
        paddingLeft: 30
    },
     Icon:{
        width:30,
        height: 30
     },
     PhotoProfile:{
        width: 35,
        height: 35
     },
     Afstand:{
        width: 1,
        height: '100%',
        backgroundColor: '#fff'
     }
})

export default styles