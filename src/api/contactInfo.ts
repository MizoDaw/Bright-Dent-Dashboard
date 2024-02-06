
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";

  const API = {
    GET: "/api/admin/contact/getAll",
    UPDATE: "/api/admin/contact/update",

  };

  const KEY = "CONTACTINFO";
  
  export const useGetContactInfo = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useUpdateContact = () => useUpdateMutation(KEY, API.UPDATE);
