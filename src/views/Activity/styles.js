import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        
    },
    ContainerLikes:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        width: '100%',
        paddingBottom: '26%'
    },
    ContainerActivity:{
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 16.5,
    },
    avatar:{
        backgroundColor: '#fff',
        borderRadius: 30,
        width: 50,
        height: 50,
    },
    text:{
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
        width: '70%'
    },
    textName:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    imgLike:{
        width: 28,
        height: 25,
        marginLeft: 10
    },
    imgComments:{
        width: 30,
        height: 24
    }
})

export default styles