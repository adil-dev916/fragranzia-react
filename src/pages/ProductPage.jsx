import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

const ProductPage = () => {

    const { products } = useContext(AppContext)

    return (
        <div className='m-5 py-5'>

            <div className='ml-9'>
                <h1 className='text-[35px]'>All Products</h1>

                <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 font-medium">
                    <Link to='/'>Home</Link>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1" />
                    </svg>
                    <Link to='/product'>Products</Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductPage
