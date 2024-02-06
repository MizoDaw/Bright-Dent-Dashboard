
import useGetQuery from "./helper/useGetQuery"

  const API = {
    GET: "/api/admin/contact/all",

  };

  const KEY = "CONTACTINFO";
  export const useGetContactInfo = (params?:any) => useGetQuery(KEY, API.GET, params);