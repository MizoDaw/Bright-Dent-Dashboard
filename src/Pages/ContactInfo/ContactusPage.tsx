import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditContactusModal from './EditContactInfoModal'
import { useGetContactInfo } from '../../api/contactInfo'

function ContactInfoPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetContactInfo()

    console.log(data);
  
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader  showAddButton={false} title={'ContactInfo'}></DashHeader>

      <LyTable
        data={data?.data}
        total={data?.pagination?.total}
        is_pagination={true}
        isLoading={false}
        columns={column}
      />

      <EditContactusModal />

    </DashBody>
  )
}

export default ContactInfoPage

