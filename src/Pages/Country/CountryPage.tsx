
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import AddCountryModal from './AddCountryModal'
import EditCountryMedia from './EditCountry'
import { useGetCountry } from '../../api/Country'

function CountryPage() {

    const column = useTableColumns()
    const {data  ,status } = useGetCountry()
    console.log(data);
    
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'country'}></DashHeader>

      <LyTable
        data={data?.data}
        isLoading={false}
        columns={column}
        
        />

    <AddCountryModal />
    <EditCountryMedia/>
    </DashBody>
  )
}

export default CountryPage

