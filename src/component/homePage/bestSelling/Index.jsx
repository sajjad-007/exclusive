import React from "react";
import ProductCart from "../../common/commonComponet/ProductCart";
import ProductCommonLayouts from "../../common/commonComponet/ProductCommonLayouts";
import { useGetBestSellingProductQuery } from "../../../features/Api/productApi";
const BestSelling = () => {
    const {data,error,isLoading} = useGetBestSellingProductQuery()
  return (
    <section className="mt-[70px]">
      <div className="container">
        <div className="border-b-[1px] border-b-text-7d8 mb-10 ">
          <ProductCommonLayouts
            ProductCart={ProductCart}
            heading={"this month"}
            description={"best selling products"}
            partialItemShow={4}
            isViewBtn = {true}
            componentData={data?.products}
            isLoading={isLoading}
          />

        </div>
      </div>
    </section>
  );
};

export default BestSelling;
