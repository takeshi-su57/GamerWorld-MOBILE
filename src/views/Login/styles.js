import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
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
    ContainerLoad:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    ContainerKeyboard:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    img:{
        width: 207,
        height: 120,
    },
    text:{
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10
    },
    input:{
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        backgroundColor: '#585858',
        width: 300,
        height: 45,
        fontSize: 16,
        paddingLeft: 15,
        color: '#fff'
    },
    inputAlert:{
        borderRadius: 5,
        backgroundColor: '#585858',
        borderWidth: 1,
        borderColor: '#B40486',
        width: 300,
        height: 45,
        fontSize: 16,
        paddingLeft: 15,
        color: '#fff'
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',

        width: 130,
        height: 40,
        backgroundColor: '#00BFFF',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 3,
        marginVertical: '10%',
    },
    ContainerCreateUser:{
       alignItems: 'center',
       flexDirection: 'row',
       marginBottom: 15
    },
    textLink:{
        color: '#fff',
        fontSize: 18,
        fontStyle: 'italic',    
    },
    textLinkPurple:{
        color: '#B40486',
        fontSize: 23,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    }
})

export default styles