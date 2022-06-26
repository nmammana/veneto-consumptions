import { Field } from "formik";
import React from "react";
import { apartments } from "../../../apartments";
import { ApartmentsInput } from "./ApartmentsInput/ApartmentsInput";
import "./ApartmentsField.scss";

export const ApartmentsField = () => {
  // TODO: Implementar cuando este listo el endpoint de departamentos
  /* const [apartments, setApartments] = useState();

  const fetchApartments = async () => {
    const apartmentsResponse = await axios.get(
      "https://consumos-veneto-village-dev.herokuapp.com/api/apartments"
    );
    console.log("response", apartmentsResponse.data);
    setApartments(apartmentsResponse.data);
  };

  useEffect(() => {
    fetchApartments();
  }, []); */

  return (
    <div className="apartmentsField">
      <label className="staysFormLabel" htmlFor="apartment">
        Departamento
      </label>
      <Field
        id="apartment"
        name="apartment"
        component={ApartmentsInput}
        options={apartments}
      />
    </div>
  );
};
