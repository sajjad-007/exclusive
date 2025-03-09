import React from 'react'
import ProductLeft from '../../component/ProductPage/ProductLeft'
import {useGetProductCategoryListQuery} from '../../features/Api/productApi'

const ProductPage = () => {
  const {data,error,isLoading} = useGetProductCategoryListQuery()
  return (
    <div>
        <ProductLeft categoryData={data} isLoading={isLoading} error={error}/>
    </div>
  )
}

export default ProductPage