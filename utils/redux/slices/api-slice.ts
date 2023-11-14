import { db } from "@/utils/firebase/firestore";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDocs, collection } from "firebase/firestore";

interface CategoryType {
  name: string;
  id: string;
  img: string;
}
export const firebaseApi = createApi({
  reducerPath: "firebaseApi",
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    getCategories: builder.query({
      async queryFn() {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const categories: any = [];
        querySnapshot.forEach((doc) => {
          categories.push({ id: doc.id, ...doc.data() });
        });
        return { data: categories };
      },
    }),
    getMenu: builder.query({
      async queryFn() {
        const querySnapshot = await getDocs(collection(db, "menu"));
        const menu: any = [];
        querySnapshot.forEach((doc) => {
          menu.push({ id: doc.id, ...doc.data() });
        });
        return { data: menu };
      },
    }),
    getOrders: builder.query({
      async queryFn() {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const menu: any = [];
        querySnapshot.forEach((doc) => {
          menu.push({ id: doc.id, ...doc.data() });
        });
        return { data: menu };
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetMenuQuery } = firebaseApi;
