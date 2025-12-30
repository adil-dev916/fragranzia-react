import React from 'react'

const FeaturedCard = ({ product }) => {

    return (
        <div className='w-[220px] p-3'>
            <div className='flex justify-center items-center w-full h-[200px] shadow-[0_0_3px_1px_#24242453] rounded-[24px_0_24px_0] transition-all duration-300 ease-linear hover:rounded-[0_24px_0_24px]'>
                
            </div>

            <div className="mt-2">
        <p className="text-sm font-medium">{product.title}</p>
      </div>

        </div>
    )
}

export default FeaturedCard
