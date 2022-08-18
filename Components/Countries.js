import { View, Text, Image, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Country from './Country';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searched, setSearched] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setSearched(data)
                setCountries(data)
            })
    }, [])

    const handleSearch = text => {
        const filtered = countries.filter(country => country.name.common.includes(text));
        setSearched(filtered);
    }

    return (
        <View style={styles.container}>
            <Text>Countries: {searched.length}</Text>

            <TextInput
                onChangeText={handleSearch}
                style={styles.input}>
            </TextInput>

            <ScrollView>
                {
                    searched.map(country => <Country country={country} />)
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        fontSize: 40,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})