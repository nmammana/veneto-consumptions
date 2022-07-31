import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import "./ProductsForm.scss";
import { toast, ToastContainer } from "react-toastify";
import { Item } from "../../../../types/types";
import { ProductNameField } from "./ProductNameField/ProductNameField";
import { ProductPriceField } from "./ProductPriceField/ProductPriceField";
import { ProductTypeField } from "./ProductTypeField/ProductTypeField";
import { ProductSubmitField } from "./ProductSubmitField/ProductSubmitField";
import { AxiosContext } from "../../../context/AxiosContext";
import { ProductsContext } from "../../../context/ProductsContext";
import { Spinner } from "../../../common/Spinner/Spinner";
import { toastDefaultConfig } from "../../../../utils/toast";

export const ProductsForm = () => {
  const { authAxios } = useContext(AxiosContext);
  const productsContext = useContext(ProductsContext);
  const params = useParams();
  const navigate = useNavigate();
  const itemId = Number(params.itemId);
  const [isLoadingItem, setIsLoadingItem] = useState<boolean>(false);
  const [item, setItem] = useState<Item>({
    name: "",
    price: 0
  });

  const createProduct = async (product: Item) => {
    try {
      const itemResponse = await authAxios.post("/items/", product);
      if (itemResponse.data) {
        productsContext?.setProductList([
          ...productsContext.productList,
          itemResponse.data
        ]);
      }
    } catch (e) {
      toast.error(
        "Ocurrió un error al crear un nuevo producto",
        toastDefaultConfig
      );
    }
  };

  const editProduct = async (product: Item) => {
    try {
      await authAxios.put(`/items/${itemId}/`, product);
      productsContext?.setProductList(
        productsContext.productList.map(productItem => {
          if (productItem.id === product.id) return product;
          return productItem;
        })
      );
    } catch (e) {
      toast.error("Ocurrió un error al editar el producto", toastDefaultConfig);
    }
  };
  useEffect(() => {
    if (itemId) {
      const getItemById = async (): Promise<Item> => {
        const itemResponse = await authAxios.get(`/items/${itemId}/`);
        return itemResponse.data;
      };
      const fetchItemById = async () => {
        setIsLoadingItem(true);
        const itemRes = await getItemById();
        setItem(itemRes);
        setIsLoadingItem(false);
      };
      fetchItemById();
    }
  }, [itemId, authAxios]);

  if (isLoadingItem) return <Spinner />;
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
