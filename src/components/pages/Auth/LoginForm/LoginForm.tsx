import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import "./LoginForm.scss";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { AuthInput } from "./AuthInput/AuthInput";
import { SubmitButton } from "./SubmitButton/SubmitButton";

interface AuthFormProps {
  email: string;
  password: string;
}

const authenticateUser = async (values: AuthFormProps) => {
  const authResponse = await axios.post(
    "https://consumos-veneto-village-dev.herokuapp.com/api/auth/login",
    {
      email: values.email,
      password: values.password
    }
  );
  if (!authResponse.data) {
    return null;
  }
  return authResponse;
};

export const LoginForm = () => {
  const initialValues: AuthFormProps = { email: "", password: "" };
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const login = async (values: AuthFormProps) => {
    try {
      const authResponse = await authenticateUser(values);
      /* const data = { res }; */
      if (authResponse?.data) {
        await localStorage.setItem(
          "token",
          JSON.stringify({
            access: authResponse.data.access,
            refresh: authResponse.data.refresh
          })
        );
        authContext?.setAuthState({
          access: authResponse.data.access,
          refresh: authResponse.data.refresh
        });
        navigate("/home");
      }
    } catch (error) {
      console.error("Auth error: ", error);
    }
  };

  return (
    <div className="formWrapper">
      <div className="formTitlesContainer">
        <p className="formTitle">Bienvenido</p>
        <p className="formSubtitle">Ingresá tus datos para comenzar</p>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          login(values);
          actions.setSubmitting(false);
        }}
      >
        <Form className="form">
          <Field
            id="email"
            name="email"
            placeholder="Email"
            className="authInputField"
            component={AuthInput}
          />
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="authInputField"
            component={AuthInput}
          />
          <Field
            id="submit"
            type="submit"
            name="submit"
            component={SubmitButton}
          />
        </Form>
      </Formik>
    </div>
  );
};
