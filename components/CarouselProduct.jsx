import { FlatList, Image, StyleSheet } from "react-native"

export const CarouselProduct = ({ images }) => {
    return (
        <>
            <FlatList
                style={{ marginBottom: 20 }}
                data={images}
                renderItem={({ item }) => (
                    <Image
                        style={ styles.image }
                        source={{ uri: item }}
                    />
                )}
                keyExtractor={(_ , index) => index}
                contentContainerStyle={{ columnGap: 20 }}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400,
        backgroundColor: '#f6f6f6',
        borderRadius: 10
    }
})