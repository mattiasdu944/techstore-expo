import { StyleSheet, Text, TouchableOpacity } from "react-native"


export const ProductDetails = ({ product }) => {


    const { name, category, price, description, inStock } = product;

    return (
        <>
            <Text style={{ color:'blue' }}>{ product.category }</Text>
            <Text style={{ ...styles.title, marginBottom:20 }}>{ product.name }</Text>

            <Text style={ styles.title }>Description</Text>
            <Text style={{ color: '#767676' }}>{ product.description }</Text>

            <TouchableOpacity style={ styles.button } activeOpacity={0.5}>
                <Text style={{ textAlign:'center', color:'white' }}>
                    Comprar por ${ product.price } USD
                </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize: 24,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: 'blue',
        borderRadius: 20,
        paddingVertical: 15,
        textAlign: 'center',
    }
});