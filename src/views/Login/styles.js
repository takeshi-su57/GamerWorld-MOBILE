import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container:{
      flex: 1,
      alignItems: 'center',
    },
    img:{
        width: 259,
        height: 150,
        marginVertical: '15%',
    },
    text:{
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input:{
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '85%',
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
        marginVertical: '12%'
    },
    ContainerCreateUser:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    textLink:{
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 18,
        fontStyle: 'italic'
    },
    textLinkPurple:{
        color: '#B40486',
        fontSize: 23,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})

export default styles