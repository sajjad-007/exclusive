import React from "react";
import ProductLeft from "../../component/ProductPage/ProductLeft";
import { useGetProductCategoryListQuery } from "../../features/Api/productApi";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import ProductRight from "../../component/ProductPage/ProductRight";

const ProductPage = () => {
  const { data, error, isLoading } = useGetProductCategoryListQuery();
  return (
    <div className="mb-[104px]">
      <div className="container">
        <div className="mt-20 ">
          <BreadCrumb />
        </div>
        <div className="flex justify-between gap-[97px]">
          <ProductLeft
            categoryData={data}
            isLoading={isLoading}
            error={error}
          />
          <ProductRight/>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
