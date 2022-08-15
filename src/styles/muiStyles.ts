import { makeStyles } from "@material-ui/core";

export const useTextFieldInputStyle = makeStyles(() => ({
  textFieldInputStyle: {
    "& .MuiInputBase-root": {
      "&::after": {
        borderColor: "#008dc8"
      }
    }
  }
}));

export const useSelectFieldInputStyles = makeStyles(() => ({
  select: {
    "&:after": {
      borderColor: "#008dc8"
    }
  }
}));
