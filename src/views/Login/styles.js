import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container:{
     flex: 1,
      alignItems: 'center'
    },
    ContainerKeyboard:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    img:{
        width: 230,
        height: 133,
    },
    text:{
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: '8%',
        marginBottom: 15
    },
    input:{
        borderRadius: 5,
        backgroundColor: '#fff',
        width: 300,
        height: 45,
        fontSize: 16,
        paddingLeft: 15
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
        marginTop: '10%',
        marginBottom: '5%'
    },
    ContainerCreateUser:{
       alignItems: 'center',
       flexDirection: 'row',
       marginBottom: '5%'
    },
    textLink:{
        color: '#fff',
        fontSize: 18,
        fontStyle: 'italic'
    },
    textLinkPurple:{
        color: '#B40486',
        fontSize: 23,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
})

export default styles