
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function FormCountry() {
  const formik = useFormikContext<any>();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    <KarimField name="name_en" type="text"label='Country_name_en'  placeholder='placeholder' />

    </Col>
    <Col>
    <KarimField name="name_ar"  type="text" label='Country_name_ar' placeholder='placeholder'  />

    </Col>

   
  </Row>
  )
}

export default FormCountry


