import React, { FC, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import "./BenefictsPopup.scss";
import { IoMdClose } from "react-icons/io";
import { Tooltip } from "@material-ui/core";
import { isEmpty } from "lodash";
import { Stay } from "../../../../../types/types";
import { AxiosContext } from "../../../../context/AxiosContext";
import { Spinner } from "../../../../common/Spinner/Spinner";
import { GuestCard } from "./GuestCard/GuestCard";

Modal.setAppElement("#root");

interface BenefictsPopupProps {
  stayId: number;
}

export const BenefictsPopup: FC<BenefictsPopupProps> = ({ stayId }) => {
  const { authAxios } = useContext(AxiosContext);
  const [isBenefictsPopupOpen, setIsBenefictsPopupOpen] =
    useState<boolean>(false);
  const [isLoadingStay, setIsLoadingStay] = useState<boolean>(false);
  const [stay, setStay] = useState<Stay>();

  const onViewBenefictsClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsBenefictsPopupOpen(true);
  };

  const onClosePopup = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent
  ) => {
    event.stopPropagation();
    setIsBenefictsPopupOpen(false);
  };

  useEffect(() => {
    if (stayId && isBenefictsPopupOpen) {
      const getStayById = async (): Promise<Stay> => {
        const stayResponse = await authAxios.get(`/stay/${stayId}/`);
        return stayResponse.data;
      };
      const fetchStayById = async () => {
        setIsLoadingStay(true);
        const stayRes = await getStayById();
        setStay(stayRes);
        setIsLoadingStay(false);
      };
      fetchStayById();
    }
  }, [stayId, authAxios, isBenefictsPopupOpen]);
  return (
    <>
      <Tooltip title="Ver beneficios">
        <button
          className="viewBenefictsButton"
          onClick={e => onViewBenefictsClick(e)}
        >
          <p>Ver beneficios</p>
        </button>
      </Tooltip>

      <Modal
        isOpen={isBenefictsPopupOpen}
        onRequestClose={() => setIsBenefictsPopupOpen(false)}
        style={{
          overlay: {
            background: "rgba(0,0,0, .85)"
          },
          content: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            background: "#fff",
            width: "35%",
            height: "700px",
            padding: "36px",
            overflow: "hidden"
          }
        }}
      >
        <div className="benefictsPopupContent">
          <div className="popupHeader">
            <p className="popupTitle">Beneficios de huéspedes</p>
          </div>
          {isLoadingStay || isEmpty(stay?.users) ? (
            <Spinner />
          ) : (
            stay?.users.map((user, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <GuestCard key={index} guest={user} />
            ))
          )}
          <div
            className="floatingCloseButton"
            onClick={e => onClosePopup(e)}
            onKeyDown={onClosePopup}
            role="button"
            tabIndex={0}
          >
            <IoMdClose className="closeIcon" />
          </div>
        </div>
      </Modal>
    </>
  );
};
