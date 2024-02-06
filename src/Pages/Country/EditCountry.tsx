
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import { InitialValues, getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { QueryStatusEnum } from '../../config/QueryStatus'
import FormCountry from './FormCountry'
import { useUpdateCountry } from '../../api/Country'

function EditCountry() {
  const {objectToEdit} = usePageState()
  const {status , mutate } = useUpdateCountry();

  const handleSubmit = (value:InitialValues)=>{
      // console.log(value);

      const dataToSend = getDataToSend({...value ,social_media_id:value.id , is_active :value.is_active ? true:false })

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
      <FormCountry />
    </LayoutModal>
  )
}

export default EditCountry
