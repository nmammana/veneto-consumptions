import React, { useState } from "react";
import Modal from "react-modal";
import "./BenefitsPopup.scss";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");

export const BenefitsPopup = () => {
  const [isBenefitsPopupOpen, setIsBenefitsPopupOpen] =
    useState<boolean>(false);

  const onViewBenefitsClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent
  ) => {
    event.stopPropagation();
    setIsBenefitsPopupOpen(true);
  };

  const onClosePopup = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent
  ) => {
    event.stopPropagation();
    setIsBenefitsPopupOpen(false);
  };
  return (
    <>
      <div
        className="viewBenefitsButton"
        onClick={e => onViewBenefitsClick(e)}
        onKeyDown={onViewBenefitsClick}
        role="button"
        tabIndex={0}
      >
        <p>Ver beneficios</p>
      </div>
      <Modal
        isOpen={isBenefitsPopupOpen}
        onRequestClose={() => setIsBenefitsPopupOpen(false)}
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
        <div className="benefitsPopupContent">
          <div className="popupHeader">
            <p className="popupTitle">Beneficios de huéspedes</p>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="benefitsContainer">
              <p className="title">Beneficio</p>
              <div className="benefitsList">
                <p className="content">Almuerzo vegetariano x 2</p>
                <p className="content">Desayuno completo x 3</p>
              </div>
            </div>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="benefitsContainer">
              <p className="title">Beneficio</p>
              <div className="benefitsList">
                <p className="content">Almuerzo vegetariano x 2</p>
                <p className="content">Desayuno completo x 3</p>
              </div>
            </div>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="benefitsContainer">
              <p className="title">Beneficio</p>
              <div className="benefitsList">
                <p className="content">Almuerzo vegetariano x 2</p>
                <p className="content">Desayuno completo x 3</p>
              </div>
            </div>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="benefitsContainer">
              <p className="title">Beneficio</p>
              <div className="benefitsList">
                <p className="content">Almuerzo vegetariano x 2</p>
                <p className="content">Desayuno completo x 3</p>
              </div>
            </div>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="benefitsContainer">
              <p className="title">Beneficio</p>
              <div className="benefitsList">
                <p className="content">Almuerzo vegetariano x 2</p>
                <p className="content">Desayuno completo x 3</p>
              </div>
            </div>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="benefitsContainer">
              <p className="title">Beneficio</p>
              <div className="benefitsList">
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
