
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormSliders from './FormSliders'
import {InitialValues, getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useUpdateSliderStatus } from '../../api/sliders'

function EditSlidersModal() {
  const {objectToEdit} = usePageState()
  const {status , mutate } = useUpdateSliderStatus();

  const handleSubmit = (value:InitialValues)=>{
    console.log(value);
    const dataToSend = getDataToSend({...value ,slider_id:value.id , is_active :value.is_active ? true:false })
    mutate(dataToSend)
    
}

  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={handleSubmit}
     headerText='edit' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormSliders />
    </LayoutModal>
  )
}

export default EditSlidersModal
