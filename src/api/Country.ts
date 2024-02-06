import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import { useToggleStatus } from "./helper/useToggleStatus";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
    ADD: `/api/admin/country/add`,
    GET_ALL: `/api/admin/country/getAll`,
    UPDATE_STATUS: `/api/admin/country/update_status`,
    UPDATE_DETAILS: `/api/admin/country/update`,
    DELETE: `/api/admin/country/delete`,
}
const KEY = 'COUNTRY'

export const useAddCountry = () => useAddMutation(KEY, API.ADD);
export const useGetCountry = () => useGetQuery(KEY, API.GET_ALL);
export const useUpdateCountry = () => useUpdateMutation(KEY, API.UPDATE_DETAILS);
export const useUpdateCountryStatus = () => useToggleStatus(KEY, API.UPDATE_STATUS, 'country_id');
export const useDeleteCountry = () => useDeleteMutation(KEY, API.DELETE, 'country_id');