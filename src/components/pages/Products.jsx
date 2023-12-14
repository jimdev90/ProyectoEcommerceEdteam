import React from 'react';
import useFetch from "../../hooks/useFetch.js";

const Products = () => {

    const  { data, error, loading } = useFetch("public/products")

    if (loading) return <h1>Cargando</h1>
    if (error) return <h1>Errors</h1>

    return (
        <div>
            <h1>Products</h1>
            {
                data.length === 0 ? (<p>No existen productos</p>) :
                data.map((producto, index) => (
                    <div key={index} >
                        { JSON.stringify(producto)}
                    </div>
                ))
            }
        </div>
    );
};

export default Products;
