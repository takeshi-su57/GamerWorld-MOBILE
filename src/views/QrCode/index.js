import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Header from '../../components/header'
import arrowLeft from '../../assets/arrowLeft.png'

export default function QrCode({navigation}){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
    };

    function back(){
        navigation.navigate('Login')
    }

    function Home(){
        navigation.navigate('Home')
    }

    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Header back={back} arrowLeft={arrowLeft}/>
            <View style={styles.containerCamer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.camera}
                />
                <TouchableOpacity 
                    onPress={Home}
                    style={styles.ButtonScaner}>
                    <Text style={styles.text}>Scanear</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container:{
        flex: 1,
    },
    containerCamer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40
    },
    camera: {
        width: '90%',
        height: '90%',
        marginBottom: -30
    },
    ButtonScaner:{
        alignItems: 'center',
        justifyContent: 'center',

        width: '60%',
        height: 40,
        backgroundColor: '#DF01D7',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5
    },
    text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
 }); 