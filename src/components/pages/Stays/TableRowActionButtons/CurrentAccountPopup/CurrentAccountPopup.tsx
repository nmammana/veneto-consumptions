import { Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { ButtonLarge } from "../../../../common/buttons/ButtonLarge/ButtonLarge";
import { ButtonMiddle } from "../../../../common/buttons/ButtonMiddle/ButtonMiddle";
import "./CurrentAccountPopup.scss";

Modal.setAppElement("#root");

export const CurrentAccountPopup = () => {
  const [iscurrentAccountPopupOpen, setIsCurrentAcccountPopupOpen] =
    useState<boolean>(false);

  const onViewCurrentAccountClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsCurrentAcccountPopupOpen(true);
  };

  const onClosePopup = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent
  ) => {
    event.stopPropagation();
    setIsCurrentAcccountPopupOpen(false);
  };

  const onPayOffClick = () => {};

  const onFullStayPayOffClick = () => {};

  return (
    <>
      <Tooltip title="Cuenta corriente">
        <button
          className="currentAccountButton"
          onClick={e => onViewCurrentAccountClick(e)}
        >
          <FiEye className="icon" />
        </button>
      </Tooltip>

      <Modal
        isOpen={iscurrentAccountPopupOpen}
        onRequestClose={() => setIsCurrentAcccountPopupOpen(false)}
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
        <div className="currentAccountpopupContent">
          <div className="popupHeader">
            <p className="popupTitle">Cuenta corriente</p>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="consumptionsContainer">
              <p className="title">Consumos</p>
              <div className="benefictsList">
                <p className="content">Almuerzo vegetariano x 2 $500</p>
                <p className="content">Desayuno completo x 3 $350</p>
              </div>
            </div>
            <div className="separator" />
            <div className="accountSummary">
              <div className="totalAmountContainer">
                <p className="totalTitle">Total</p>
                <p className="totalValue">$2050</p>
              </div>
              <ButtonMiddle onClick={() => onPayOffClick()} text="Saldar" />
            </div>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="consumptionsContainer">
              <p className="title">Consumos</p>
              <div className="benefictsList">
                <p className="content">Almuerzo vegetariano x 2 $500</p>
                <p className="content">Desayuno completo x 3 $350</p>
              </div>
            </div>
            <div className="separator" />
            <div className="accountSummary">
              <div className="totalAmountContainer">
                <p className="totalTitle">Total</p>
                <p className="totalValue">$2050</p>
              </div>
              <ButtonMiddle onClick={() => onPayOffClick()} text="Saldar" />
            </div>
          </div>
          <div className="guestCard">
            <div className="nameContainer">
              <p className="title">Nombre y apellido</p>
              <p className="content">Federico Gonzalez</p>
            </div>
            <div className="consumptionsContainer">
              <p className="title">Consumos</p>
              <div className="benefictsList">
                <p className="content">Almuerzo vegetariano x 2 $500</p>
                <p className="content">Desayuno completo x 3 $350</p>
              </div>
            </div>
            <div className="separator" />
            <div className="accountSummary">
              <div className="totalAmountContainer">
                <p className="totalTitle">Total</p>
                <p className="totalValue">$2050</p>
              </div>
              <ButtonMiddle onClick={() => onPayOffClick()} text="Saldar" />
            </div>
          </div>

          <div className="stayTotalAmountContainer">
            <p className="title">Total de consumos</p>
            <div className="stayAccountSummary">
              <div className="totalAmountBox">
                <p className="price">$2700</p>
              </div>
              <ButtonLarge
                onClick={() => onFullStayPayOffClick()}
                text="Saldar estadía"
              />
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
