import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import "./StaysForm.scss";
import { head, parseInt } from "lodash";
import { DateTime } from "luxon";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { StayFields } from "./StayFields/StayFields";
import { GuestFields } from "./GuestFields/GuestFields";
import { StaySummary } from "./StaySummary/StaySummary";
import {
  Benefit,
  notUndefined,
  Optional,
  PlainBenefit,
  Stay,
  StayInputs,
  TypeOfBenefit,
  User
} from "../../../../types/types";
import { benefitList } from "../../../../models/benefits";
import { AxiosContext } from "../../../context/AxiosContext";
import { StaysContext } from "../../../context/StaysContext";
import { Spinner } from "../../../common/Spinner/Spinner";
import {
  validateStayCreationEdition,
  validateUserAddition
} from "./validations";
import { toastDefaultConfig } from "../../../../utils/toast";

const formatBenefits = (
  benefits?: PlainBenefit[],
  userEdited?: User
): Optional<Benefit[]> => {
  if (!benefits) return [];
  const formattedBenefits = benefits
    .map(benefit => {
      const typeOfBenefit = Object.values(TypeOfBenefit).find(
        type => head(Object.keys(benefit)) === type.toString()
      );
      let benefitQuantity = typeOfBenefit ? benefit[typeOfBenefit] : undefined;
      if (typeof typeOfBenefit === "string") return undefined;
      /* Por alguna razon en runtime se estan convirtiendo las quantities en string, 
      a pesar de que vscode las marca como tipo number, y eso hace que se rompa en la 
      creacion de estadias */
      if (typeof benefitQuantity === "string")
        benefitQuantity = parseInt(benefitQuantity);
      const userBenefitQuantityAvailable =
        userEdited?.benefits?.find(b => b.type_of_benefit === typeOfBenefit)
          ?.quantity_available ?? 0;
      const userBenefitQuantity =
        userEdited?.benefits?.find(b => b.type_of_benefit === typeOfBenefit)
          ?.quantity ?? 0;
      const benefitAlreadyUsed =
        userBenefitQuantity - userBenefitQuantityAvailable;
      return typeOfBenefit && benefitQuantity
        ? {
            type_of_benefit: typeOfBenefit,
            quantity: benefitQuantity,
            quantity_available: benefitQuantity - benefitAlreadyUsed
          }
        : undefined;
    })
    .filter(notUndefined);
  return formattedBenefits;
};

export const StaysForm = () => {
  const { authAxios } = useContext(AxiosContext);
  const { currentStay, setCurrentStay, stayList, setStayList } =
    useContext(StaysContext);
  const params = useParams();
  const stayId = Number(params.stayId);
  const [isLoadingStay, setIsLoadingStay] = useState<boolean>(false);
  const navigate = useNavigate();
  const stayDefaultValues: StayInputs = {
    startDate: DateTime.local().toISO(),
    endDate: DateTime.local().toISO(),
    firstName: "",
    lastName: "",
    email: "",
    identityNumber: "",
    qrCode: "",
    benefits: benefitList.map(benefit => ({
      [`${benefit.typeOfBenefit}`]: 0
    }))
  };
  const [stayFormValues, setStayFormValues] =
    useState<StayInputs>(stayDefaultValues);
  const [userEdited, setUserEdited] = useState<Optional<User>>(undefined);

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
        benefits
      } = ref.current.values;
      const formattedBenefits = formatBenefits(benefits, userEdited);
      const errorMsg = validateUserAddition(
        ref.current.values,
        formattedBenefits,
        userEdited
      );
      const formattedStartDate = startDate
        ? DateTime.fromISO(startDate).toFormat("dd/MM/yyyy")
        : "";
      const formattedEndDate = endDate
        ? DateTime.fromISO(endDate).toFormat("dd/MM/yyyy")
        : "";
      if (!errorMsg) {
        const updatedUsers = userEdited?.id
          ? currentStay.users.map(user => {
              if (user.id === userEdited.id) {
                return {
                  ...userEdited,
                  user: {
                    ...userEdited.user,
                    first_name: firstName,
                    last_name: lastName,
                    user_email: email,
                    document: identityNumber
                  },
                  qr_code: qrCode,
                  benefits: formattedBenefits
                };
              }
              return user;
            })
          : [
              ...currentStay.users,
              {
                user: {
                  first_name: firstName,
                  last_name: lastName,
                  user_email: email,
                  document: identityNumber
                },
                qr_code: qrCode,
                benefits: formattedBenefits
              }
            ];
        setCurrentStay({
          ...currentStay,
          start_date: formattedStartDate,
          end_date: formattedEndDate,
          apartment,
          users: updatedUsers
        });
        setUserEdited(undefined);
        setStayFormValues(stayDefaultValues);
        ref.current.setFieldValue("start_date", startDate);
        ref.current.setFieldValue("end_date", endDate);
        ref.current.setFieldValue("apartment", apartment);
        ref.current.setFieldValue("firstName", "");
        ref.current.setFieldValue("lastName", "");
        ref.current.setFieldValue("email", "");
        ref.current.setFieldValue("identityNumber", "");
        ref.current.setFieldValue("qrCode", "");
        ref.current.setFieldValue(
          "benefits",
          benefitList.map(benefit => ({
            [`${benefit.typeOfBenefit}`]: 0
          }))
        );
      } else {
        toast.warn(errorMsg, toastDefaultConfig);
      }
    }
  };

  const deleteUser = (deletedUser: User) => {
    const updatedUserList = currentStay.users.filter(
      user => user !== deletedUser
    );
    setCurrentStay({ ...currentStay, users: updatedUserList });
  };

  const editUser = (userToEdit: User) => {
    setUserEdited(userToEdit);
    if (ref.current) {
      ref.current.setFieldValue("firstName", userToEdit.user.first_name);
      ref.current.setFieldValue("lastName", userToEdit.user.last_name);
      ref.current.setFieldValue("email", userToEdit.user.user_email);
      ref.current.setFieldValue("identityNumber", userToEdit.user.document);
      ref.current.setFieldValue("qrCode", userToEdit.qr_code);
      userToEdit.benefits?.forEach((benefit, index) => {
        ref.current?.setFieldValue(
          `benefits[${index}].${benefit.type_of_benefit}`,
          benefit.quantity
        );
      });
    }
  };

  const createStay = async (newStay: Stay) => {
    try {
      const stayResponse = await authAxios.post("/stay/", newStay);
      if (stayResponse.data) {
        setStayList([...stayList, stayResponse.data]);
        setCurrentStay({ users: [] });
        navigate("/estadias");
        toast.success("Estadía creada con éxito!", toastDefaultConfig);
      }
    } catch (e) {
      const error = e as AxiosError;
      if (error.response) {
        const errorData = error.response?.data as any;
        const errorMsg = [
          "Ocurrió un error al editar la estadía",
          errorData.details
        ]
          .filter(notUndefined)
          .join(": ");
        toast.error(errorMsg, toastDefaultConfig);
      }
    }
  };

  const editStay = async (stayModified: Stay) => {
    try {
      await authAxios.put(`/stay/${stayId}/`, stayModified);
      setStayList(
        stayList.map(existingStay => {
          if (existingStay.id === currentStay.id) return stayModified;
          return existingStay;
        })
      );
      setCurrentStay({ users: [] });
      navigate("/estadias");
      toast.success("Estadía modificada con éxito!", toastDefaultConfig);
    } catch (e) {
      const error = e as AxiosError;
      if (error.response) {
        const errorData = error.response?.data as any;
        const errorMsg = [
          "Ocurrió un error al editar la estadía",
          errorData.details
        ]
          .filter(notUndefined)
          .join(": ");
        toast.error(errorMsg, toastDefaultConfig);
      }
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
        }
        setCurrentStay(stayRes);
        setStayFormValues(stayValues => ({
          ...stayValues,
          apartment: stayRes.apartment,
          startDate: stayRes.start_date
            ? DateTime.fromFormat(stayRes.start_date, "dd/MM/yyyy").toISO()
            : "",
          endDate: stayRes.end_date
            ? DateTime.fromFormat(stayRes.end_date, "dd/MM/yyyy").toISO()
            : " "
        }));
        setIsLoadingStay(false);
      };
      fetchStayById();
    }
  }, [stayId, authAxios, setCurrentStay]);

  if (isLoadingStay) return <Spinner />;
  return (
    <div className="stayFormContainer">
      <Formik
        initialValues={stayFormValues}
        onSubmit={() => {
          if (ref.current?.values) {
            const { startDate, endDate, apartment } = ref.current.values;
            const errorMsg = validateStayCreationEdition(ref.current.values);
            const formattedStartDate = startDate
              ? DateTime.fromISO(startDate).toFormat("dd/MM/yyyy")
              : "";

            const formattedEndDate = endDate
              ? DateTime.fromISO(endDate).toFormat("dd/MM/yyyy")
              : "";
            if (errorMsg) {
              toast.warn(errorMsg, toastDefaultConfig);
            } else {
              setCurrentStay({
                ...currentStay,
                start_date: formattedStartDate,
                end_date: formattedEndDate,
                apartment
              });
              if (currentStay.id) {
                editStay(currentStay);
              } else {
                createStay(currentStay);
              }
            }
          }
        }}
        innerRef={ref}
      >
        <Form className="stayForm">
          <StayFields />
          <GuestFields onAddGuestClick={onAddGuestClick} />
          <StaySummary
            stay={currentStay}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </Form>
      </Formik>
    </div>
  );
};
