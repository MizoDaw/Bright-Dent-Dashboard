
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
      
      {
        name: t("image"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.image} />
          )
        }
      },
      {
        name: t("axis_x"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.axis_x
      },
      {
        name: t("category_id"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.category_id
      },
      {
        name: t("axis_y"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.axis_y
      },

      {
        name: t("created_at"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.created_at
      },
      {
        name: t("row id"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.id
      },
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <Actions

            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=>{}}
              objectToEdit={row}
              showEdit={true}
              showView={false}
              showDelete={false}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

