import { Stack } from 'expo-router';

import { SafeAreaView, View, ScrollView, } from 'react-native'
import { CategoriesList, ProductsList, Search } from '../components';


const Home = () => {
    return (
        <SafeAreaView 
            style={{ backgroundColor:'white',  flex: 1 }}
        >
            <Stack.Screen options={{
                headerStyle: { backgroundColor:'white' },
                headerShadowVisible: false,
                headerTitle:'Tech Store',
                headerTitleAlign:'center',
            }}/>

            <ScrollView showsVerticalScrollIndicator={ false }>
                <View 
                    style={{ 
                        flex: 1, 
                        padding: 16 
                    }}
                >
                    <Search/>

                    <CategoriesList/>

                    <ProductsList/>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;