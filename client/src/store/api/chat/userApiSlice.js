import apiSlice from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `user/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery } = userApiSlice;
