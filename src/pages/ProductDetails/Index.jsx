import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import ProductImgDetails from "../../component/ProductDetails/ProductImgDetails";
import {
  useGetProductByCategoryQuery,
  useGetSingleProductDetailsQuery,
} from "../../features/Api/productApi";
import ProductContents from "../../component/ProductDetails/ProductContents";
import ProductsDetailsSkeleton from "../../component/helpers/ProductsDetailsSkeleton";
import { useParams } from "react-router-dom";
import Heading from "../../component/common/commonComponet/Heading";
import ProductCart from "../../component/common/commonComponet/ProductCart";
import ProductSkeleton from "../../component/helpers/ProductSkeleton";
const ProductDetails = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetSingleProductDetailsQuery(
    params?.id
  );
  const relatedCategory = useGetProductByCategoryQuery("smartphones");
  const mapRelatedCategory = relatedCategory?.data?.products;

  return (
    <div className="pt-20 pb-36">
      <div className="container">
        {isLoading ? (
          <ProductsDetailsSkeleton />
        ) : (
          <>
            <div className="pb-20">
              <BreadCrumb />
            </div>
            <div className="productDetails_main flex  justify-between  ">
              <div className="img_part w-[62%] h-full">
                <ProductImgDetails image={data?.images} />
              </div>
              <div className="content_part  w-[32%] h-full">
                <ProductContents data={data && data} />
              </div>
            </div>
          </>
        )}
        {/* bottom part */}
        <div className="main_bottom mt-36">
          <Heading title="related item" description={false} />
          <div className="flex flex-wrap gap-7 items-center justify-between">
            {mapRelatedCategory?.map((item, index) => (
              // {console.log(item)}
              <div className="" key={index}>
                <ProductCart itemData={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
