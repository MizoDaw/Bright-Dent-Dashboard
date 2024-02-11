
import React, { useState } from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';
import { useGetCategoryName } from '../../api/category';
import { useTranslation } from 'react-i18next';

interface  OdooCategoryRow {
  name:string ,
  id:number
}

interface  ShowSelect {
  showSelect:boolean
}

function FormCategory({showSelect =true}:ShowSelect) {
  const {t} = useTranslation();
  const formik = useFormikContext<any>();
  const {data , isLoading} = useGetCategoryName();

  const axisArray = [
    {axis_x:1,id:1},
    {axis_x:2,id:2},
    {axis_x:3,id:3},
  ];

  const axisOptions = axisArray?.map( (e) =>  ({
    label:e?.axis_x ,
    value:e.id
  }))

  const Data = data?.map( (e:OdooCategoryRow) =>  ({
    label:e?.name ,
    value:e.id
  }))

  if(isLoading){
    return <span>{t("Loading Content")} ...</span>
  }

  return (
    <Row k xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
      {/* name from form utils */}
      {showSelect && <KarimField option={Data|| []} name="name" type="Select" label='Category name'  placeholder='placeholder' />}
      <KarimField name="image" type="File" label='Category Image'  placeholder='placeholder' />
    </Col>
    <Col>
      <KarimField name="axis_x" option={axisOptions || []} type="Select" label='access_x'  placeholder='placeholder' />
      <KarimField name="axis_y" option={axisOptions || []} type="Select" label='access_y'  placeholder='placeholder' />
    </Col>   
  </Row>
  )
}

export default FormCategory


