
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/admin/category/all",
    ADD: "/api/admin/category/create",
    UPDATE: "/api/admin/category/update",
    GETName: "/api/admin/category/odoo/all",
  };

  const KEY = "CATEGORY";
  const KEY2 = "ODOO";

  export const useGetCategory = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddCategory = () => useAddMutation(KEY, API.ADD);
  export const useUpdateCategory = () => useUpdateMutation(KEY, API.UPDATE);
  export const useGetCategoryName = () =>useGetQuery(KEY2, API.GETName)