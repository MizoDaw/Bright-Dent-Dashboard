
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormContactus from './FormContactInfo'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useUpdateContact } from '../../api/contactInfo'

function EditContactInfoModal() {
  const {objectToEdit} = usePageState()
  const {status , mutate } = useUpdateContact();

//   const handleSubmit = (value:InitialValues)=>{
//     // console.log(value);
//     // const dataToSend = getDataToSend({...value  })
//     mutate({...value})   
// }

  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={()=>{}}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormContactus />
    </LayoutModal>
  )
}

export default EditContactInfoModal
