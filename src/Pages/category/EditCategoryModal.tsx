
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormCategory from './FormCategory'
import { InitialValues, getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useUpdateCategory } from '../../api/category'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useFormikContext } from 'formik'

function EditCategoryModal() {
  const {objectToEdit} = usePageState()
  const {status , mutate } = useUpdateCategory();

    
  const handleSubmit = (value:InitialValues)=>{

      const dataToSend = getDataToSend({ ...value, category_id:value.category_id, id:value.id })

      mutate(dataToSend)

  }


  return (
    <LayoutModal 
    isAddModal={false}
    getInitialValues={getInitialValues(objectToEdit)} 
    handleSubmit={handleSubmit}
    status={status as QueryStatusEnum}
    headerText='edit' 
    getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormCategory showSelect={false} />
    </LayoutModal>
  )
}

export default EditCategoryModal
