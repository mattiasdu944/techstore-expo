import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ProductCard } from "./ProductCard";
import { useFetch } from "../hooks/useFetch";

export const ProductsList = () => {
    
    const { data: products, isLoading } = useFetch('/products');
    
    return (
        
        <>
            <Text style={ styles.title }>Ultimos Productos</Text>
            {
                isLoading
                ? (
                    <View>
                        <ActivityIndicator/>
                    </View>
                )
                : (
                    products.map( product => 
                        <View style={ styles.listProducts } key={product.id}>
                            <ProductCard product={ product }/>
                        </View>
                    )
                )
               
            }
        </>
    )
}


const styles = StyleSheet.create({
    title :{
        fontSize: 24,
        fontWeight: "800",
        marginBottom: 10,
    },
});
