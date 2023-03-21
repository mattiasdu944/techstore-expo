import { Stack, useSearchParams } from 'expo-router'
import { ActivityIndicator, SafeAreaView, ScrollView,  View} from 'react-native'

import { useFetch } from '../../hooks/useFetch'
import { CarouselProduct, ProductDetails } from '../../components';

const ProductScreen = () => {

    const { id } = useSearchParams();
    const { isLoading, data: product } = useFetch(`/products/${id}`);

    return (
        <SafeAreaView 
            style={{ backgroundColor:'white',  flex: 1 }}
        >
            <Stack.Screen options={{
                headerStyle: { backgroundColor:'white' },
                headerShadowVisible: false,
                headerTitle: isLoading ? 'Tech Store' :  product.name,
                headerTitleAlign:'center',
            }}/>

            <ScrollView showsVerticalScrollIndicator={ false }>
                {
                    isLoading
                    ? (
                        <View style={{ flex: 1 }}>
                            <ActivityIndicator size={ 100 }/>
                        </View>
                    )
                    : (
                        <View style={{ 
                            flex: 1, 
                            padding: 16 
                        }}>
                            <CarouselProduct images={ product.images } />            
                            <ProductDetails product={ product }/>
                        </View>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductScreen