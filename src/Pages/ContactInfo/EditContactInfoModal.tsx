
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormContactus from './FormContactInfo'
import { getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'

function EditContactInfoModal() {
  const {objectToEdit} = usePageState()
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormContactus />
    </LayoutModal>
  )
}

export default EditContactInfoModal
