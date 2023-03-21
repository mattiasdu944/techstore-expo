import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const CategoryButton = ({ name }) => {
    return (
        <TouchableOpacity style={ styles.btn } activeOpacity={0.7}>
            <Text style={{ color:'white' }}>{ name }</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'black',
        borderRadius: 15,
        padding: 10,
        color: 'white',
    }
})