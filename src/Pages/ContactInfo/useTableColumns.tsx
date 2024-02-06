
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
 
      {
        name: t("key"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.key
        
      },
     
      {
        name: t("value"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.value
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
              // showDelete={false}
              // showDelete={false}
              // onDelete={() => fnDelete({ id: row.id })}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

