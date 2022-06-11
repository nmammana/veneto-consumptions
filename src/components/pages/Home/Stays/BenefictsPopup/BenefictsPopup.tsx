import React, { useState } from "react";
import Modal from "react-modal";
import "./BenefictsPopup.scss";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");

export const BenefictsPopup = () => {
  const [isBenefictsPopupOpen, setIsBenefictsPopupOpen] =
    useState<boolean>(false);

  const onViewBenefictsClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent
  ) => {
    event.stopPropagation();
    setIsBenefictsPopupOpen(true);
  };

  const onClosePopup = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent
  ) => {
    event.stopPropagation();
    setIsBenefictsPopupOpen(false);
  };
  return (
    <>
      <div
        className="viewBenefictsButton"
        onClick={e => onViewBenefictsClick(e)}
        onKeyDown={onViewBenefictsClick}
        role="button"
        tabIndex={0}
      >
        <p>Ver beneficios</p>
      </div>
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
            height: "70%",
            padding: "36px",
            overflow: "hidden"
          }
        }}
      >
        <div className="popupContent">
          <div className="popupHeader">
            <p className="benefictsPopupTitle">Beneficios de huéspedes</p>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="benefictsContainer">
              <p className="title">Beneficio</p>
              <div className="benefictsList">
                <p className="content">Almuerzo vegetariano x 2</p>
                <p className="content">Desayuno completo x 3</p>
              </div>
            </div>
          </div>

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
