

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormCountry from './FormCountry'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'
import { useAddCountry } from '../../api/Country'

function AddCountryModal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddCountry()
  const handelSubmit = (values:any )=>{
    console.log(values);
    
    const dataToSend = getDataToSend(values)
    mutate(dataToSend)

    // Submit Value
  }
  return (
    <LayoutModal
     isAddModal={true}
     getInitialValues={getInitialValues()} 
     handleSubmit={handelSubmit} 
     status={status as QueryStatusEnum}
     headerText={t('Add') +t('country')}

     getValidationSchema={getValidationSchema()}>

    <FormCountry />
  </LayoutModal>
  )
}

export default AddCountryModal

