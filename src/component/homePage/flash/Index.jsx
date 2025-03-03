import React from 'react'
import ProductCommonLayouts from '../../common/commonComponet/ProductCommonLayouts'
import ProductCart from '../../common/commonComponet/ProductCart'
import { useGetAllProductQuery } from '../../../features/Api/productApi'

const FlashSales = () => {
  const { data, error, isLoading } = useGetAllProductQuery()
  console.log(data)
  console.log(isLoading)
  console.log(error)
  return (
    <section>
      <div className="container">
        <div className='flex flex-col items-center border-b-[1px] border-b-text-7d8 mb-10'>
          <ProductCommonLayouts
            ProductCart = {ProductCart}
            timeStamp = {true}
            timeOffer = {1}
            heading = {"today's"}
            description = {"flash sales"}
            isArrow = {true}
            partialItemShow={4}
            componentData={[...new Array(10)]}
          />
          <div className="pb-20 ">
            <button className="common_btn">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlashSales