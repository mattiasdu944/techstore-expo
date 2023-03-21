import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { CategoryButton } from './CategoryButton'

import { useFetch } from '../hooks/useFetch';

export const CategoriesList = () => {
    const { data: categories, isLoading } = useFetch('/categories');


    return (
        <>
            <Text style={ styles.title }>Categorias</Text>
            {
                isLoading
                ? (
                    <View>
                        <ActivityIndicator/>
                    </View>

                )
                : (
                    <FlatList
                        style={{ marginBottom: 20 }}
                        data={categories}
                        renderItem={({ item }) => (
                            <CategoryButton name={ item.name }/>
                        )}
                        keyExtractor={({id}) => id}
                        contentContainerStyle={{ columnGap: 12 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
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
    }
});
