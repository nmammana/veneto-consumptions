import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { head } from "lodash";
import "./StaysForm.scss";
import { DateTime } from "luxon";
import { toast, ToastContainer } from "react-toastify";
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
import { AxiosContext } from "../../../context/AxiosContext";
import { StaysContext } from "../../../context/StaysContext";
import { Spinner } from "../../../common/Spinner/Spinner";
import { validateUserAddition } from "./validations";
import { toastDefaultConfig } from "../../../../utils/toast";

const formatBeneficts = (beneficts?: PlainBenefict[]): Optional<Benefict[]> => {
  if (!beneficts) return [];
  const formattedBeneficts = Object.values(TypeOfBenefict)
    .map(type => {
      if (typeof type === "string") return undefined;
      const matchedBenefict = beneficts.find(
        benefict => head(Object.keys(benefict)) === type.toString()
      );
      const quantity = matchedBenefict
        ? (head(Object.values(matchedBenefict)) as number)
        : 0;
      if (quantity === undefined) return undefined;
      return {
        type_of_benefit: type,
        quantity
      };
    })
    .filter(notUndefined);
  return formattedBeneficts;
};

export const StaysForm = () => {
  const { authAxios } = useContext(AxiosContext);
  const staysContext = useContext(StaysContext);
  const params = useParams();
  const stayId = Number(params.stayId);
  const [isLoadingStay, setIsLoadingStay] = useState<boolean>(false);
  const navigate = useNavigate();
  const [stay, setStay] = useState<Stay>({
    users: []
  });
  const stayDefaultValues: StayInputs = {
    startDate: DateTime.local().toISO(),
    endDate: DateTime.local().toISO(),
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
      const errorMsg = validateUserAddition(
        ref.current.values,
        formattedBeneficts
      );
      const formattedStartDate = DateTime.fromISO(startDate ?? "").toFormat(
        "dd/MM/yyyy"
      );
      const formattedEndDate = DateTime.fromISO(endDate ?? "").toFormat(
        "dd/MM/yyyy"
      );
      if (!errorMsg) {
        setStay({
          ...stay,
          start_date: formattedStartDate,
          end_date: formattedEndDate,
          apartment,
          users: [
            ...stay.users,
            {
              user: {
                first_name: firstName,
                last_name: lastName,
                email,
                document: identityNumber
              },
              qr_code: qrCode,
              benefits: formattedBeneficts
            }
          ]
        });
        setStayFormValues(stayDefaultValues);
        ref.current.setFieldValue("startDate", startDate);
        ref.current.setFieldValue("endDate", endDate);
        ref.current.setFieldValue("apartment", apartment);
        ref.current.setFieldValue("firstName", "");
        ref.current.setFieldValue("lastName", "");
        ref.current.setFieldValue("email", "");
        ref.current.setFieldValue("identityNumber", "");
        ref.current.setFieldValue("qrCode", "");
        ref.current.setFieldValue(
          "beneficts",
          benefictList.map(benefict => ({
            [`${benefict.typeOfBenefict}`]: 0
          }))
        );
      } else {
        toast.error(errorMsg, toastDefaultConfig);
      }
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
      /* ref.current.setFieldValue("startDate", stay.start_date);
      ref.current.setFieldValue("endDate", stay.end_date); */
      /* ref.current.setFieldValue("apartment", stay.apartment); */
      ref.current.setFieldValue("firstName", userToEdit.user.first_name);
      ref.current.setFieldValue("lastName", userToEdit.user.last_name);
      ref.current.setFieldValue("email", userToEdit.user.email);
      ref.current.setFieldValue("identityNumber", userToEdit.user.document);
      ref.current.setFieldValue("qrCode", userToEdit.qr_code);
      userToEdit.benefits?.forEach((benefict, index) => {
        ref.current?.setFieldValue(
          `beneficts[${index}].${benefict.type_of_benefit}`,
          benefict.quantity
        );
      });
    }
  };

  const createStay = async (newStay: Stay) => {
    try {
      const stayResponse = await authAxios.post("/stay/", newStay);
      if (stayResponse.data) {
        staysContext?.setStayList([
          ...staysContext.stayList,
          stayResponse.data
        ]);
      }
    } catch (e) {
      toast.error("Ocurrió un error al crear la estadía", toastDefaultConfig);
    }
  };

  const editStay = async (stayModified: Stay) => {
    try {
      await authAxios.put(`/stay/${stayId}/`, stayModified);
      staysContext?.setStayList(
        staysContext.stayList.map(existingStay => {
          if (existingStay.id === stay.id) return stayModified;
          return existingStay;
        })
      );
    } catch (e) {
      toast.error("Ocurrió un error al editar la estadía", toastDefaultConfig);
    }
  };

  useEffect(() => {
    if (stayId) {
      const getStayById = async (): Promise<Stay> => {
        const stayResponse = await authAxios.get(`/stay/${stayId}/`);
        return stayResponse.data;
      };
      const fetchStayById = async () => {
        setIsLoadingStay(true);
        const stayRes = await getStayById();
        if (!stayRes) {
          toast.error(
            "Ocurrió un error al editar la estadía",
            toastDefaultConfig
          );
          navigate("/stays");
        }
        setStay(stayRes);
        setStayFormValues(stayValues => ({
          ...stayValues,
          apartment: stayRes.apartment,
          startDate: DateTime.fromFormat(
            stayRes.start_date ?? "",
            "dd/MM/yyyy"
          ).toISO(),
          endDate: DateTime.fromFormat(
            stayRes.end_date ?? "",
            "dd/MM/yyyy"
          ).toISO()
        }));
        setIsLoadingStay(false);
      };
      fetchStayById();
    }
  }, [stayId, authAxios, navigate]);

  if (isLoadingStay) return <Spinner />;
  return (
    <div className="stayFormContainer">
      <Formik
        initialValues={stayFormValues}
        onSubmit={(values, actions) => {
          if (stay.id) {
            editStay(stay);
          } else {
            createStay(stay);
          }
          actions.setSubmitting(false);
          navigate("/stays");
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
