import React from "react";
import { Formik, Form, Field } from "formik";
/* import { useNavigate } from "react-router-dom"; */
import "./LoginForm.scss";
import axios from "axios";
/* import { AuthContext } from "../../../context/AuthContext"; */

interface AuthFormProps {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const initialValues: AuthFormProps = { email: "", password: "" };
  /*  const navigate = useNavigate();
  const authContext = useContext(AuthContext); */

  const login = async (/* values: AuthFormProps */) => {
    try {
      const res = await axios.post(
        "https://consumos-veneto-village-dev.herokuapp.com/api/auth/login",
        {
          email: "paulo@londra.com",
          password: "Password0"
        }
      );
      const data = { res };
      console.log(data);
      /* if (data.res) {
        authContext?.setAuthState({
          access: 
          pin: data.pin,
          tower: data.tower,
          floor: data.floor,
          apartment: data.apartment,
          wing: data.wing,
          userId: data._id,
          name: data.name,
          identityNumber: data.identityNumber
        });
        setReservation({ ...reservation, user: data._id });
        navigate("/home");
      } */
    } catch (e) {
      console.error("Ocurrio un ERROR: ", e);
    }
  };

  return (
    <div className="formWrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          login();
          actions.setSubmitting(false);
        }}
      >
        <Form className="form">
          <Field id="email" name="email" placeholder="Email" />
          <Field id="password" name="password" placeholder="Password" />
          <button className="submitButton" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
