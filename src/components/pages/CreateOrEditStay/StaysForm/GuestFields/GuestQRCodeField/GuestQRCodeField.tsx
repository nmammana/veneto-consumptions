import { Field } from "formik";
import React from "react";

import "./GuestQRCodeField.scss";
import { GuestQRCodeInput } from "./GuestQRCodeInput/GuestQRCodeInput";

export const GuestQRCodeField = () => {
  return (
    <div className="guestQRCodeField">
      <label className="guestFormLabel" htmlFor="guestQRCode">
        Código QR
      </label>
      <Field id="guestQRCode" name="guestQRCode" component={GuestQRCodeInput} />
    </div>
  );
};
