
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormContactus from './FormContactInfo'
import {InitialValues, getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useUpdateContact } from '../../api/contactInfo'
import { QueryStatusEnum } from '../../config/QueryStatus'

function EditContactInfoModal() {
  const {objectToEdit} = usePageState()
  const {status,mutate } = useUpdateContact();

  const handleSubmit = (value:InitialValues)=>{
    const dataToSend = getDataToSend({...value ,contactUs_id:value.id })
    mutate(dataToSend)   
}

  return (
    <LayoutModal 
    status={status as QueryStatusEnum}
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={handleSubmit}
     headerText='Edit Contact Info' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormContactus />
    </LayoutModal>
  )
}

export default EditContactInfoModal
