import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: 'exclusive',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({
   GetAllBanner: builder.query({
    query: () => `/banner`
   }),
   GetCategoryList: builder.query({
    query: () => '/category'
   })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBannerQuery,useGetCategoryListQuery } = exclusiveApi