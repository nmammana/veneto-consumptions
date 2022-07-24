import React, { useRef, useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import { head } from "lodash";
import "./StaysForm.scss";
import { DateTime } from "luxon";
import { StayFields } from "./StayFields/StayFields";
import { GuestFields } from "./GuestFields/GuestFields";
import { StaySummary } from "./StaySummary/StaySummary";
import {
  Benefict,
  notUndefined,
  Optional,
  PlainBenefict,
  Stay,
  StayInputs,
  TypeOfBenefict,
  User
} from "../../../../types/types";
import { benefictList } from "../../../../models/beneficts";

const formatBeneficts = (beneficts?: PlainBenefict[]): Optional<Benefict[]> => {
  if (!beneficts) return [];
  const formattedBeneficts = Object.values(TypeOfBenefict)
    .map(type => {
      if (typeof type === "string") return undefined;
      const matchedBenefict = beneficts.find(
        benefict => head(Object.keys(benefict)) === type.toString()
      );
      const quantity = matchedBenefict
        ? head(Object.values(matchedBenefict))
        : 0;
      if (quantity === undefined) return undefined;
      return {
        typeOfBenefict: type,
        quantity
      };
    })
    .filter(notUndefined);
  return formattedBeneficts;
};

export const StaysForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stay, setStay] = useState<Stay>({
    users: []
  });

  const stayDefaultValues: StayInputs = {
    startDate: DateTime.local().toFormat("dd/LLL/yyyy"),
    endDate: DateTime.local().toFormat("dd/LLL/yyyy"),
    firstName: "",
    lastName: "",
    email: "",
    identityNumber: "",
    qrCode: "",
    beneficts: benefictList.map(benefict => ({
      [`${benefict.typeOfBenefict}`]: 0
    }))
  };

  const [stayFormValues, setStayFormValues] =
    useState<StayInputs>(stayDefaultValues);

  const ref = useRef<FormikProps<StayInputs>>(null);
  const onAddGuestClick = () => {
    if (ref.current?.values) {
      const {
        startDate,
        endDate,
        apartment,
        firstName,
        lastName,
        email,
        identityNumber,
        qrCode,
        beneficts
      } = ref.current.values;
      /* TODO: Hay que hacer las validaciones de los campos antes de cargarlos 
      en la estadía. Despues de eso habria que cambiar el tipado para que los 
      campos obligatorios dejen de ser opcionales */
      const formattedBeneficts = formatBeneficts(beneficts);
      setStay({
        start_date: startDate,
        end_date: endDate,
        apartment,
        users: [
          ...stay.users,
          {
            user: {
              firstName,
              lastName,
              email,
              identityNumber
            },
            qrCode,
            beneficts: formattedBeneficts
          }
        ]
      });
      setStayFormValues(stayDefaultValues);
      ref.current.resetForm();
    }
  };

  const deleteUser = (deletedUser: User) => {
    const updatedUserList = stay.users.filter(user => user !== deletedUser);
    setStay({ ...stay, users: updatedUserList });
  };

  const editUser = (userToEdit: User) => {
    if (ref.current) {
      const updatedUserList = stay.users.filter(user => user !== userToEdit);
      setStay({ ...stay, users: updatedUserList });
      ref.current.setFieldValue("startDate", stay.start_date);
      ref.current.setFieldValue("endDate", stay.end_date);
      ref.current.setFieldValue("apartment", stay.apartment);
      ref.current.setFieldValue("firstName", userToEdit.user.firstName);
      ref.current.setFieldValue("lastName", userToEdit.user.lastName);
      ref.current.setFieldValue("email", userToEdit.user.email);
      ref.current.setFieldValue(
        "identityNumber",
        userToEdit.user.identityNumber
      );
      ref.current.setFieldValue("qrCode", userToEdit.qrCode);
      userToEdit.beneficts?.forEach((benefict, index) => {
        ref.current?.setFieldValue(
          `beneficts[${index}].${benefict.typeOfBenefict}`,
          benefict.quantity
        );
      });
    }
  };

  return (
    <div className="stayFormContainer">
      <Formik
        initialValues={stayFormValues}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
        innerRef={ref}
      >
        <Form className="stayForm">
          <StayFields />
          <GuestFields onAddGuestClick={onAddGuestClick} />
          <StaySummary
            stay={stay}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </Form>
      </Formik>
    </div>
  );
};
