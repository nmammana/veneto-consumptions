import React from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../../common/buttons/AddButton/AddButton";
import { Layout } from "../../common/Layout/Layout";
import "./Stays.scss";
import { StaysSearchBar } from "./StaysSearchBar/StaysSearchBar";
import { StaysTable } from "./StaysTable/StaysTable";

export const Stays = () => {
  const navigate = useNavigate();
  return (
    <div className="root">
      <Layout>
        <StaysSearchBar />
        <StaysTable />
      </Layout>
      <AddButton
        onClick={() => navigate("/editStay")}
        className="floatingButton"
      />
    </div>
  );
};
