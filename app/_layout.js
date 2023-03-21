import { Stack } from "expo-router";
import { ProductProvider } from "../context/ProductContext";

const Layout = () => {
    return (
        <ProductProvider>
            <Stack/>
        </ProductProvider>
    );
}
export default Layout;