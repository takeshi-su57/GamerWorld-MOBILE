import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    Container:{
        flex: 1
    },

    ContainerScrollView:{
        
    },

    ContainerAvatar:{
        alignItems: 'center',
        justifyContent: 'center',
        
        flexDirection: 'row',
        marginTop: '11%'
    },

    avatar:{
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginRight: 13
    },

    textName:{
        fontSize: 23,
        color: '#FFF',
        fontWeight: 'bold'
    },
    
    ContainerFollow:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

        marginTop: '7%',
        marginLeft: '12%',
        marginBottom: '18%'
    },

    buttonFollow:{
        alignItems: 'center',
        justifyContent: 'center',

        width: 140,
        height: 35,
        backgroundColor: '#FE2EC8',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
    },

    buttonUnFollow:{
        alignItems: 'center',
        justifyContent: 'center',

        width: 140,
        height: 35,
        backgroundColor: '#FF8000',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
    },

    textFollow:{
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },

    ContainerCustomer:{
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '10%'
    },

    ImgCustomer:{
        width: 30,
        height: 25,
        marginRight: 10
    },

    TextCustomer:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    ContainerPost:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },

    ImgPost:{
        width: 330,
        height: 200,
        borderRadius: 5
    },

    TextCaption:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 5
    },

    ContainerCommon:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

        marginTop: '10%',
        marginBottom: '5%'
    },

    ImgCommon:{
        width: 25,
        height: 25,
        marginRight: '10%',
        marginLeft: '10%'
    }
})

export default styles