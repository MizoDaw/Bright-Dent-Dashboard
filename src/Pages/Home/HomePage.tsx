import React from "react";
import StatisticsCard from "../../Components/Ui/StaticsCard/StaticCard";
import { FaRedRiver } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from "reactstrap";
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart3 } from "react-icons/bs";
import LastOrderTable from "./tables/LastOrder/LastOrderTable";
import LoadingPage from "../../Layout/app/LoadingPage";
import { useGetAllHomeStatic } from "../../api/home";
import LastUserTable from "./tables/LastUser/LastUserTable";

export default function HomePage() {

  const { t } = useTranslation()

  const { data: statistics, isLoading } = useGetAllHomeStatic();

  if(isLoading){
    return  <LoadingPage/>

  }

  console.log(statistics);
  
  return (
    <>


      <Row xs={1} sm={1} md={1} lg={1} xl={1}  >

        <Col style={{ padding: "0.5rem" }}>
          <div style={{ cursor: "pointer" }}>

            <StatisticsCard
              icon={<AiOutlineUser className="warning" size={24} />}
              count={`${(statistics?.user_count) ?? 1}`}
              CardContent={t(`You_have`) + "  " + ((statistics?.user_count) ?? 1) + "  " + t(`User_in_your_Application`)}

              pathWhenClick="/"
              CardTitle={t("users")}
            />
          </div>
        </Col>

      </Row>
      

      <Row xs={1} sm={1} md={1} lg={2} xl={2} style={{margin:"30px 0 "}}>
      
        {/* <Col>
           <LastOrderTable latest_Orders={statistics?.last_order}/>
        </Col> */}
        <Col>
        <LastUserTable most_driver_rate={statistics?.last_users}/>
        </Col>
    </Row>
      </>
  );
}
