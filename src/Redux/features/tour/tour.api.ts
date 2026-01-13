import { baseApi } from "@/Redux/baseApi";



export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo,
            }),
        }),


        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            }),

        }),


        getAllTourType: builder.query({
            query: () => ({
                url: "/tour/tour-type",
                method: "GET",
            }),
            transformResponse: (response) => response.data,
        }),


    }),





});



export const { useGetAllTourTypeQuery } = tourApi