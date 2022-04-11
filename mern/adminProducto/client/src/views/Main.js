import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProducts] = useState();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res =>{

            setProducts(res.data.products);
            })
            .catch(err => console.log("Error:", err))
    },[])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm></ProductForm>
            {products && <ProductList product={products} removeFromDom={removeFromDom}></ProductList>}
        </div>
    )
}


