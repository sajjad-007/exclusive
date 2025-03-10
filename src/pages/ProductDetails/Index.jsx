import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import ProductImgDetails from "../../component/ProductDetails/ProductImgDetails";
import { useGetSingleProductDetailsQuery } from "../../features/Api/productApi";
import ProductContents from "../../component/ProductDetails/ProductContents";
const ProductDetails = () => {
  const {data,error,isLoading} = useGetSingleProductDetailsQuery(parseInt(2))
  return (
    <div className="pt-20 pb-36">
      <div className="container">
        <div className="pb-20">
          <BreadCrumb />
        </div>
        <div className="productDetails_main flex  justify-between  ">
          <div className="img_part w-[62%] h-full">
            <ProductImgDetails image={data?.images}/>
          </div>
          <div className="content_part  w-[32%] h-full">
            <ProductContents/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
