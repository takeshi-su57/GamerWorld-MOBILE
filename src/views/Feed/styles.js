import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container:{
        flexDirection: 'column',
    },

    ContainerFeed:{
        margin: 10,
        marginTop: 30
    },
    
    ContainerAvatar:{
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },
    imgAvatar:{
        backgroundColor: '#fff',
        borderRadius: 30,
        width: 55,
        height: 55,
        marginRight: 10
    },
    Text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    TextCaption:{
        color: '#fff',
        fontSize: 18,
        marginBottom: 16
    },

    ContainerPost:{
        flexDirection: 'column',
    },
    imgPost:{
        width: '100%',
        height: 300,
        borderRadius: 2,
        marginBottom: 5
    },

    ContainerComment:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    Input:{
        width: '88%',
        height: 35,
        backgroundColor: '#848484',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        paddingLeft: 20,
        fontSize: 17,
        marginRight: 5
    },
    imgPublic:{
        width: 41,
        height: 40
    },  

    ContainerInteraction:{
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    likesComments:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    imgInteraction:{
        width: 26.5,
        height: 23.6,
    },
    TextNumber:{
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 6,
        marginRight: 20
    }
})

export default styles