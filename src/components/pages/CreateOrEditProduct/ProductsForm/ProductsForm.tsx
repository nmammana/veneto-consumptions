import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import "./ProductsForm.scss";
import { toast } from "react-toastify";
import { Item } from "../../../../types/types";
import { ProductNameField } from "./ProductNameField/ProductNameField";
import { ProductPriceField } from "./ProductPriceField/ProductPriceField";
import { ProductTypeField } from "./ProductTypeField/ProductTypeField";
import { ProductSubmitField } from "./ProductSubmitField/ProductSubmitField";
import { AxiosContext } from "../../../context/AxiosContext";
import { ProductsContext } from "../../../context/ProductsContext";
import { Spinner } from "../../../common/Spinner/Spinner";
import { toastDefaultConfig } from "../../../../utils/toast";
import { validateItemCreationEdition } from "./validations";

interface ProductsFormProps {
  itemId?: number;
  setIsOpen: (value: boolean) => void;
}

export const ProductsForm: FC<ProductsFormProps> = ({ itemId, setIsOpen }) => {
  const { authAxios } = useContext(AxiosContext);
  const productsContext = useContext(ProductsContext);
  const navigate = useNavigate();
  const [isLoadingItem, setIsLoadingItem] = useState<boolean>(false);
  const [item, setItem] = useState<Item>({
    name: "",
    price: 0
  });

  const title = itemId ? "Editar productos" : "Cargar productos";

  const createProduct = async (product: Item) => {
    try {
      const itemResponse = await authAxios.post("/items/", product);
      if (itemResponse.data) {
        productsContext?.setProductList([
          ...productsContext.productList,
          itemResponse.data
        ]);
        setIsOpen(false);
        toast.success("Producto creado con éxito!", toastDefaultConfig);
      }
    } catch (error) {
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
      setIsOpen(false);
      toast.success("Producto modificado con éxito!", toastDefaultConfig);
    } catch (error) {
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
          const errorMsg = validateItemCreationEdition(values);
          if (!errorMsg) {
            if (values.id) {
              editProduct(values);
            } else {
              createProduct(values);
            }
            actions.setSubmitting(false);
            navigate("/productos");
          } else {
            toast.warn(errorMsg, toastDefaultConfig);
          }
        }}
      >
        <Form className="productForm">
          <p className="productsFormTitle">{title}</p>
          <div className="productFields">
            <ProductTypeField />
            <div className="productAndPriceContainer">
              <ProductNameField />
              <ProductPriceField />
            </div>
            <div className="submitButtonContainer">
              <ProductSubmitField />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
