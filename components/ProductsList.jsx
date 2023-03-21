import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ProductCard } from "./ProductCard";
import { useFetch } from "../hooks/useFetch";
import { useRouter } from "expo-router";

export const ProductsList = () => {
    
    const { data: products, isLoading } = useFetch('/products');
    const router = useRouter();
    
    const handleNavigation = ( term ) => {
        router.push(`/product/${ term }`);
    }

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
                    products?.map( product => 
                        <View style={ styles.listProducts } key={product.id}>
                            <ProductCard 
                                product={ product } 
                                handleNavigation={ handleNavigation }
                            />
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
