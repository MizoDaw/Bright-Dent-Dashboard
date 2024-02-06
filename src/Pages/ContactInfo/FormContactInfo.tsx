
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function FormContact() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
      {/* name from form utils */}
        <KarimField name="key" type="text" label='key'  placeholder='key' />
        
      </Col>
      <Col>
      {/* name from form utils */}
        <KarimField name="value" type="text" label='value'  placeholder='value' />
        
      </Col>
   
  </Row>
  )
}

export default FormContact


