import React, { FC } from "react";
import { Form, Formik } from "formik";
import { TypeOfBenefitField } from "./TypeOfBenefitField/TypeOfBenefitField";
import { ProductNameField } from "./ProductNameField/ProductNameField";
import "./ProductsSearchBar.scss";
import { ProductSearchParams, ButtonTypes } from "../../../../types/types";
import { ButtonSmall } from "../../../common/buttons/ButtonSmall/ButtonSmall";

interface ProductsSearchBarProps {
  getProductsListAccordingToFilters: (values: ProductSearchParams) => void;
}

export const ProductsSearchBar: FC<ProductsSearchBarProps> = ({
  getProductsListAccordingToFilters
}) => {
  return (
    <div className="productSearchBar">
      <Formik
        initialValues={{}}
        onSubmit={values => {
          getProductsListAccordingToFilters(values);
        }}
      >
        <Form className="productSearchForm">
          <div className="formFields">
            <TypeOfBenefitField className="field" />
            <ProductNameField className="field" />
          </div>

          <ButtonSmall
            text="Buscar"
            className="submitButton"
            type={ButtonTypes.Submit}
          />
        </Form>
      </Formik>
    </div>
  );
};
