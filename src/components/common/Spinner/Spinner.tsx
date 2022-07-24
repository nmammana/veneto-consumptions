import { CircularProgress } from "@material-ui/core";
import "./Spinner.scss";

export const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <CircularProgress size="3.5rem" />
    </div>
  );
};
