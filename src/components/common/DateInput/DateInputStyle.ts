import { Theme } from "../../../styles/model/theme";
import { MuiOverridesType } from "../../../styles/model/useMuiTheme";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDateTimeOverrides = (_theme: Theme): MuiOverridesType => ({
  MuiPickersCalendarHeader: {
    iconButton: {
      color: "#008dc8"
    }
  }
});
