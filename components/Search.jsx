import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const Search = () => {
    return (
        <>
            <Text style={ styles.name }>Hola Mattias</Text>
            <Text style={ styles.search }>Busca productos</Text>
            <View style={ styles.searchContainer }>
                <TextInput
                    style={ styles.textInput }
                />
                <TouchableOpacity style={ styles.searchButton }>
                    <Text style={{color: 'white'}}>Buscar</Text>
                </TouchableOpacity>
            </View>
        
        </>
    )
}


const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        fontWeight: "400"
    },
    search: {
        fontSize: 24,
        fontWeight: "800"
    },
    searchContainer:{
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        marginBottom: 20
    },
    textInput:{
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1
    },
    searchButton:{
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 10,        
    }
});