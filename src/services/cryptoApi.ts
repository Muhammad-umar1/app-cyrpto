import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-RapidAPI-Key": "3ab23b1672msh24e1ec7a17b1f76p1e285cjsn7aca440deffb",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
// const baseUrl = "https://coinranking1.p.rapidapi.com";
const baseUrl = "https://api.coinranking.com/v2";

const createRequest = (url: string) => ({
  url,
  headers: cryptoApiHeader,
});

// Configure the API service
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptoData: builder.query<any, Number>({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query<any, any>({
      query: (coinUUID) => createRequest(`/coin/${coinUUID}`),
    }),
  }),
});

// Export the query hook
export const { useGetCryptoDataQuery, useGetCryptoDetailsQuery } = cryptoApi;
