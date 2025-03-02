import React from 'react'
import ProductCommonLayouts from '../../common/commonComponet/ProductCommonLayouts'
import CategoryCart from '../../common/commonComponet/CategoryCart'

const Category = () => {
  return (
    <div className='mt-20'>
        <ProductCommonLayouts 
            ProductCart={CategoryCart}
            isArrow = {true}
            partialItemShow={7}
            heading={"Categories"}
            description={"Browse By Category"}
        />
    </div>
  )
}

export default Category