import { createContext, useEffect, useState } from "react";
import techStoreDb from "../api/techStoreDb";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getAllData = async () => {
        const productsPromise   = techStoreDb.get('/products');
        const categoriesPromise = techStoreDb.get('/categories');

        try {
            const response = await Promise.all([ productsPromise, categoriesPromise ])
            setProducts(response[0].data)
            setCategories(response[1].data)
        } catch (error) {
            console.log(error)
            
        }
        
    }

    useEffect(() => {
        getAllData();
        
    }, [])
    

    return(
        <ProductContext.Provider
            value={{
                products,
                categories
            }}
        >

        { children }

        </ProductContext.Provider>
    )
}