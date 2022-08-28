import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../../common/buttons/AddButton/AddButton";
import { Layout } from "../../common/Layout/Layout";
import { Spinner } from "../../common/Spinner/Spinner";
import { StaysContext } from "../../context/StaysContext";
import "./Stays.scss";
import { StayConsumptionStatistics } from "./StaysConsumptionStatistics/StaysConsumptionStatistics";
import { StaysSearchBar } from "./StaysSearchBar/StaysSearchBar";
import { StaysTable } from "./StaysTable/StaysTable";

export const Stays = () => {
  const navigate = useNavigate();
  const { isLoadingStayList } = useContext(StaysContext);

  return (
    <div className="stays">
      <Layout>
        <div className="staysContainer">
          <StaysSearchBar />
          <StayConsumptionStatistics />
          {isLoadingStayList ? (
            <div className="spinner">
              <Spinner />
            </div>
          ) : (
            <StaysTable />
          )}
        </div>
      </Layout>
      <AddButton
        onClick={() => navigate("/editar-estadia")}
        className="floatingButton"
      />
    </div>
  );
};
