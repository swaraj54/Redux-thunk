import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchProducts } from '../actions/productActions'

const ProductList = ({ products, loading, error, fetchProducts }) => {

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <div>Error : {error}</div>
    }

    return (
        <div>
            <h1>Product List</h1>
            {products.map((p) => (
                <div>
                    <h2>Title : {p.title}</h2>
                    <h3>Price : {p.price}</h3>
                </div>

            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        loading: state.products.loading,
        error: state.products.error
    }
}

export default connect(mapStateToProps, { fetchProducts })(ProductList);