
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
    <KarimField name="en_name" type="text" label='Country_name_en'  placeholder='Country_name' />

    </Col>
    <Col>
    <KarimField name="ar_name"  type="text" label='Country_name_ar' placeholder='Country_name'  />

    </Col>

   
  </Row>
  )
}

export default FormCountry


