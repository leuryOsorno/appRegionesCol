import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getRegionesColombia } from '../api/servicios'

const Regiones = ({navigation}) => {

    const [regionesColombia, setRegionesColombia] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const regionesColombiaData = await getRegionesColombia();
            setRegionesColombia(regionesColombiaData);
        }
        fetchData();

    }, []);

    

    const Row = ({ id, name }) => {
        return (

            <View style={styles.row}>
                <Text style={styles.title}>{id}</Text>
                <Text style={styles.title}>{name}</Text>
            </View>

        )
    }

    const rowGeter = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('RegionDetalle', { item })}>
                <Row name={item.name} />
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={regionesColombia}
            renderItem={rowGeter}
            numColumns={1}
            keyExtractor={(item) => { return item.id }}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontVariant: 'bold',
        marginVertical: 5,
    },
    text: {
        fontSize: 16,
        marginVertical: 5
    },
    row: {
        display: 'flex',
        flexDirection: 'columns !importan',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#F9C2FF',
        marginVertical: 8,
        marginHorizontal: 16,
        marginBottom: '8px'
    }
});


export default Regiones;