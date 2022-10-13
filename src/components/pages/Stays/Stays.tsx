import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../../common/buttons/AddButton/AddButton";
import { Layout } from "../../common/Layout/Layout";
import { Spinner } from "../../common/Spinner/Spinner";
import { StaysContext } from "../../context/StaysContext";
import "./Stays.scss";
import { StaysSearchBar } from "./StaysSearchBar/StaysSearchBar";
import { StaysTable } from "./StaysTable/StaysTable";

export const Stays = () => {
  const navigate = useNavigate();
  const { isLoadingStayList, setCurrentStay } = useContext(StaysContext);

  return (
    <div className="stays">
      <Layout>
        <div className="staysContainer">
          <StaysSearchBar />
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
        onClick={() => {
          setCurrentStay({ users: [] });
          navigate("/editar-estadia");
        }}
        className="floatingButton"
      />
    </div>
  );
};
