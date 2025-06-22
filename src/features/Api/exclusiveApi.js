import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DOMAIN_NAME,
    //to use cookies ( backend authGuard controller's jwt token=cookies )
    credentials: "include",
  }),
  tagTypes: ["cartItem"],
  endpoints: (builder) => ({
    //postman get method
    GetAllBanner: builder.query({
      query: () => `/banner`,
    }),
    GetCategoryList: builder.query({
      query: () => "/category",
    }),
    GetFlashSale: builder.query({
      query: () => "/flash",
    }),
    GetCategory: builder.query({
      query: () => "/category",
    }),
    GetAllProduct: builder.query({
      query: () => "/product",
    }),
    GetSubCategory: builder.query({
      query: () => "/sub-category",
    }),
    GetAllBestSelling: builder.query({
      query: () => "/bestSelling",
    }),
    GetExploreProduct: builder.query({
      query: () => "/explore-product",
    }),
    GetSingleProductDetails: builder.query({
      query: (id) => `/product/${id}`,
    }),
    GetSingleCategory: builder.query({
      query: (id) => `/category/${id}`,
    }),
    // postman's post method
    AddtoCart: builder.mutation({
      query: (productInfo) => ({
        url: `addtocart`,
        method: "POST",
        body: productInfo,
      }),
    }),
    RemoveAddtoCart: builder.mutation({
      query: (cartId) => ({
        url: `/addtocart/${cartId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cartItem"]
    }),
    GetSingleAddtoCart: builder.query({
      query: () => `addtocart`,
      providesTags: ["cartItem"],
    }),
  }),
 
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductQuery,
  useGetCategoryQuery,
  useGetAllBannerQuery,
  useGetCategoryListQuery,
  useGetFlashSaleQuery,
  useGetSubCategoryQuery,
  useGetAllBestSellingQuery,
  useGetExploreProductQuery,
  useGetSingleProductDetailsQuery,
  useGetSingleCategoryQuery,
  useAddtoCartMutation,
  useGetSingleAddtoCartQuery,
  useRemoveAddtoCartMutation,
} = exclusiveApi;
