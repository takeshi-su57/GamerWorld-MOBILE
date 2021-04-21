import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container:{
      flex: 1,
      alignItems: 'center',
    },
    ContainerFile:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '25%'
    },
    img:{
        width: 110,
        height: 110,
        marginRight: 40
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',

        width: 100,
        height: 40,
        backgroundColor: '#00BFFF',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5
    },
    textButton:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    ContainerCaption:{
        marginTop: '10%'
    },  
    textCaption:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
    },
    input:{
        backgroundColor: '#585858',
        width: 350,
        height: 50,
        borderRadius: 3,
        marginTop: 5,
        paddingLeft: 17,
        fontSize: 16,
        color: '#fff'
      },
      textButtonCaption:{
        alignItems: 'center',
        justifyContent: 'center',

        width: 130,
        height: 40,
        backgroundColor: '#A901DB',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        marginTop: '7%',
      }
})

export default styles