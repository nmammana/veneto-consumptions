import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import "./ProductsForm.scss";
import { Item } from "../../../../types/types";
import { ProductNameField } from "./ProductNameField/ProductNameField";
import { ProductPriceField } from "./ProductPriceField/ProductPriceField";
import { ProductTypeField } from "./ProductTypeField/ProductTypeField";
import { ProductSubmitField } from "./ProductSubmitField/ProductSubmitField";
import { AxiosContext } from "../../../context/AxiosContext";

export const ProductsForm = () => {
  const { authAxios } = useContext(AxiosContext);
  const params = useParams();
  const navigate = useNavigate();
  const itemId = Number(params.itemId);
  const [isLoadingItem, setIsLoadingItem] = useState<boolean>(false);
  const [item, setItem] = useState<Item>({
    name: "",
    price: 0
  });

  const getItemById = async (): Promise<Item> => {
    const itemResponse = await authAxios.get(`/items/${itemId}/`);
    return itemResponse.data;
  };

  const createProduct = async (product: Item) => {
    try {
      await authAxios.post("/items/", product);
    } catch (e) {
      console.error("ERROR: ", e);
    }
  };

  const editProduct = async (product: Item) => {
    try {
      await authAxios.put(`/items/${itemId}/`, product);
    } catch (e) {
      console.error("ERROR: ", e);
    }
  };
  useEffect(() => {
    if (itemId) {
      const fetchItemById = async () => {
        setIsLoadingItem(true);
        const itemRes = await getItemById();
        setItem(itemRes);
        setIsLoadingItem(false);
      };
      fetchItemById();
    }
  }, [itemId]);

  if (isLoadingItem) return <div>Cargando</div>;
  return (
    <div className="productFormContainer">
      <Formik
        initialValues={item}
        onSubmit={(values, actions) => {
          if (values.id) {
            editProduct(values);
          } else {
            createProduct(values);
          }
          actions.setSubmitting(false);
          navigate("/products");
        }}
      >
        <Form className="productForm">
          <p className="productsFormTitle">Cargar/editar productos</p>
          <div className="productFields">
            <ProductTypeField />
            <ProductNameField />
            <ProductPriceField />
            <ProductSubmitField />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
