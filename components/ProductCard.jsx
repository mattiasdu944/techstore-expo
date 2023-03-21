import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native'


export const ProductCard = ({ product }) => {
    return (
        <TouchableOpacity style={ styles.container }>
            <Image
                source={{ uri: product.images[0] }}
                style={ styles.image }
            />
            <View>
                <Text style={ styles.nombre }>{ product.name }</Text>
                <Text style={ styles.category }>Categoria: { product.category }</Text>
                <Text style={ styles.precio }>Precio: ${ product.price }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        display: 'flex',
        flexDirection : 'row',
        columnGap : 12,
        marginBottom: 35,
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    image: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10
    },

    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    category:{
        fontSize: 16,
        fontWeight: '600',
    },
    precio: {
        fontSize: 16,
        fontWeight: '600',

    }
});