import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component, CmpLeury } from './components/Component';
import { useState } from 'react';

const MainScreen = ({ navigation }) => {

    const [colombiaInfo, setcolombiaInfo] = useState({});

    useEfffect(() => {
        async function fetchData() {
            const colombiaData = await getColombiaInfor();
            setcolombiaInfo(colombiaData);
        }
        fetchData();

        navigation

    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informaciòn de {colombiaInfo.name}</Text>
            <Text onPress={() => navigation.navigate('Regiones')} > Ir a regiones </Text>
            <Text style={styles.text}>Descripciòn {colombiaInfo.description}</Text>
            <Text style={styles.text}>Capital{colombiaInfo.stateCapital}</Text>
            <Text style={styles.text}>Superficie {colombiaInfo.surface}</Text>
            <Text style={styles.text}>poblaciòn {colombiaInfo.population}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
