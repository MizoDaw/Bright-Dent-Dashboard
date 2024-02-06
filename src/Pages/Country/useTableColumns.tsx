
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { HovarableImage } from "../../Components/Ui";
import { BaseURL } from "../../api/config";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import { useDeleteSocialMedia, useUpdateSocialMediaStatus } from "../../api/socialMedia";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
import { Switch } from "antd";
import { useDeleteCountry } from "../../api/Country";


const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteCountry();


  return useMemo(
    () => [
 
      {
        name: t("Country_name_en"),
        center: "true",
        cell: (row: any) => row?.en_name
      },
      {
        name: t("Country_name_ar"),
        center: "true",
        cell: (row: any) => row?.ar_name
      },
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row:any) => (
            <Actions
            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=>{}}
              objectToEdit={row}
              showEdit={true}
              showView={false}
              onDelete={() => deleteMutation.mutate({ country_id: row.id })}
              />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

