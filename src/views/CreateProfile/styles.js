import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container:{
      flex: 1
    },
    ContainerAlert:{
      width: '100%',
      height: 48,
  },
  textAlert:{
      fontSize: 22,
      color: '#fff',
      textAlign: 'center',
      marginTop: 3,
  },
    ContainerAvatar:{
      alignItems: 'center',
      marginBottom: 30
    },
    text:{
      fontSize: 21,
      color: '#fff',
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginTop: 25,
      marginBottom: 35
    },
    Scrollimgs:{
      marginLeft: 15
    },
    avatar:{
      margin: 7
    },
    ContainerInputs:{
      marginHorizontal: 10,
      maxWidth: '100%',
      maxHeight: 40
    },
    textLabel:{
      color: '#fff',
      fontSize: 17,
      marginTop: 10
    },
    input:{
      backgroundColor: '#585858',
      width: '100%',
      height: '100%',
      borderRadius: 3,
      marginTop: 5,
      paddingLeft: 10,
      fontSize: 16,
      color: '#fff'
    },
    AgeInput:{
      backgroundColor: '#585858',
      width: '14%',
      height: '100%',
      borderRadius: 3,
      marginTop: 5,
      paddingLeft: 10,
      fontSize: 16
    },
    ContainerButton:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',

      marginTop: 35
    },
    PurpleButton:{
      alignItems: 'center',
      justifyContent: 'center',

      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 5,
      backgroundColor: '#8258FA',
      width: 140,
      height: 40,
      marginRight: '11%'
    },
    GreenButton:{
      alignItems: 'center',
      justifyContent: 'center',

      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 5,
      backgroundColor: '#04B404',
      width: 140,
      height: 40,
    },
    textButton:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    }
})

export default styles