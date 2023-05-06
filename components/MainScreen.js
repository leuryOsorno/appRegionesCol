import React ,{ useEffect,useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { getColombiaInfo } from '../api/servicios'

const MainScreen = ({ navigation }) => {

    const [colombiaInfo, setcolombiaInfo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const colombiaData = await getColombiaInfo();
            setcolombiaInfo(colombiaData);
        }
        fetchData();

        navigation.setOptions({
            headerRight: () => {
                return (
                    <Icon name='rowing' onPress={navigation.navigate} />
                )
            }
        });

    },[])

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
    title: {
        fontSize: 20,
        fontVariant: 'bold',
        marginVertical: 5,
    },
    text: {
        fontSize: 16,
        margin: 10
    },
});

export default MainScreen