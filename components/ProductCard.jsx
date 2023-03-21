import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native'


export const ProductCard = ({ product, handleNavigation }) => {
    return (
        <TouchableOpacity style={ styles.container } onPress={ () => handleNavigation( product.id ) }>
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
        container:{
        display: 'flex',
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection : 'row',
        columnGap : 12,
        flex: 1,
        marginBottom: 20
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