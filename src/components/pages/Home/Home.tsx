import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../../common/buttons/AddButton/AddButton";
import { Layout } from "../../common/Layout/Layout";
import { StaysTable } from "./Stays/StaysTable/StaysTable";
import "./Home.scss";
import { AdminPageContext } from "../../context/AdminPageContext";
import { TableType } from "../../../types/types";
import { ProductsTable } from "./Products/ProductsTable/ProductsTable";

export const Home = () => {
  const adminPageContext = useContext(AdminPageContext);
  const navigate = useNavigate();

  switch (adminPageContext?.tableType) {
    case TableType.Stays:
      return (
        <div className="home">
          <Layout>
            <StaysTable />
          </Layout>
          <AddButton
            onClick={() => navigate("/editStay")}
            className="floatingButton"
          />
        </div>
      );
    case TableType.Products:
      return (
        <div className="home">
          <Layout>
            <ProductsTable />
          </Layout>
          <AddButton
            onClick={() => navigate("/editProduct")}
            className="floatingButton"
          />
        </div>
      );
    default:
      return null;
  }
};
