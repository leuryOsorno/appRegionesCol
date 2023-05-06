import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { getRegionColombia } from '../api/servicios'

const Region_detalle = ({route}) => {
   
    const [regionInfo, setRegionInfo] = useState([]);
    const {item} = route.params;
    useEffect(() => {
        async function fetchData() {
            const regionData = await getRegionColombia(item.id);
            setRegionInfo(regionData);
        }
        fetchData();

    }, [])
    const { name, description } = regionInfo
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Region {name}</Text>
            <Text style={styles.text}>Descripciòn {description}</Text>
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

export default Region_detalle