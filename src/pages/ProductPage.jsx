import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

const ProductPage = () => {

  const { products, searchQuery } = useContext(AppContext)
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    if (typeof searchQuery === 'string' && searchQuery.trim().length > 0) {
      setFilteredProducts(
        products.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    } else {
      setFilteredProducts(products)
    }
  }, [products, searchQuery])

  return (
    <>
      <div className='m-5 py-5'>

        <div className='ml-9'>
          <h1 className='text-[35px] font-semibold'>All Products</h1>

          <div className='flex items-center gap-2 text-sm text-gray-500 font-medium'>
            <Link to='/'>Home</Link>
            <span>{'>'}</span>
            <Link to='/products'>Products</Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className='flex justify-center mt-3'>
          <button className='w-[196px] cursor-pointer p-2 border-2 border-[#00354B] rounded-sm hover:bg-primary hover:text-white transition duration-300 ease-linear'>Load More</button>
        </div>

      </div>
    </>
  )
}

export default ProductPage
