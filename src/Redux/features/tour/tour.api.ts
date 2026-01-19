import { baseApi } from "@/Redux/baseApi";



export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({



        addTourType: builder.mutation({
            query: (tourTypeName) => ({
                url: "/tour/create-tour-type",
                method: "POST",
                data: tourTypeName,
            }),
            invalidatesTags: ["TOUR"],
        }),


        getAllTourType: builder.query({
            query: () => ({
                url: "/tour/tour-type",
                method: "GET",
            }),
            providesTags: ["TOUR"],
            transformResponse: (response) => response.data,
        }),

        removeTourType: builder.mutation({
            query: (tourTypeId) => ({
                url: `tour/tour-type/${tourTypeId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["TOUR"],
        }),

    }),

});



export const { useGetAllTourTypeQuery, useAddTourTypeMutation , useRemoveTourTypeMutation } = tourApi