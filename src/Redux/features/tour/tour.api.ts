import { baseApi } from "@/Redux/baseApi";
import type { IResponse, ITourPackage } from "@/types";



export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        addTour: builder.mutation({
            query: (tourData) => ({
                url: "/tour/create",
                method: "POST",
                data: tourData,
            }),
            invalidatesTags: ["TOUR"],
        }),

      getAllTours: builder.query<ITourPackage[], unknown>({
      query: (params) => ({
        url: "/tour",
        method: "GET",
        params: params,
      }),
      providesTags: ["TOUR"],
      transformResponse: (response: IResponse<ITourPackage[]>) => response.data,
    }),
  




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



export const { useGetAllTourTypeQuery, useAddTourTypeMutation, useGetAllToursQuery, useRemoveTourTypeMutation, useAddTourMutation } = tourApi