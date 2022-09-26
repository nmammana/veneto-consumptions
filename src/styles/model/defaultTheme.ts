import { colorChangeAlpha } from "./color";
import { FontConfigCase } from "./text";
import {
  RadiusVariant,
  Theme,
  ThemeStyleColorVariant,
  ThemeStyleVariantStateData
} from "./theme";
import {
  ElevationVariant,
  StyleVariant,
  TextVariant,
  TextWeight
} from "./themeVariant";
import { DeepRequired } from "./types";
import { VenetoColor } from "./VenetoColor";

const getStateData = (
  mainColor: VenetoColor,
  disabled = VenetoColor.MediumGray,
  disabledBackground = VenetoColor.LightGray
): ThemeStyleVariantStateData => ({
  hoverOpacity: 0.08,
  focusOpacity: 0.24,
  selectedOpacity: 0.16,
  activatedOpacity: 0.24,
  hover: colorChangeAlpha(mainColor, 0.08),
  focus: colorChangeAlpha(mainColor, 0.24),
  selected: colorChangeAlpha(mainColor, 0.16),
  active: colorChangeAlpha(mainColor, 0.24),
  disabledOpacity: 0.38,
  disabled,
  disabledBackground
});

const getGrayData = () => ({
  [ThemeStyleColorVariant.GrayDark]: VenetoColor.Black,
  [ThemeStyleColorVariant.GrayMedium]: VenetoColor.DarkGray,
  [ThemeStyleColorVariant.GrayLight]: VenetoColor.MediumGray
});

const getBackgroundColorData = () => ({
  [ThemeStyleColorVariant.Background]: VenetoColor.Background
});

export const defaultTheme: DeepRequired<Theme> = {
  isComponentTheme: true,
  style: {
    [StyleVariant.Primary]: {
      state: getStateData(VenetoColor.Blue),
      color: {
        [ThemeStyleColorVariant.Light]: VenetoColor.MediumBlue,
        [ThemeStyleColorVariant.Main]: VenetoColor.Blue,
        [ThemeStyleColorVariant.Dark]: VenetoColor.DarkBlue,
        [ThemeStyleColorVariant.Contrast]: VenetoColor.White,
        ...getGrayData(),
        ...getBackgroundColorData()
      }
    },
    [StyleVariant.Secondary]: {
      state: getStateData(VenetoColor.Heather),
      color: {
        [ThemeStyleColorVariant.Light]: VenetoColor.LightHeather,
        [ThemeStyleColorVariant.Main]: VenetoColor.Heather,
        [ThemeStyleColorVariant.Dark]: VenetoColor.DarkHeather,
        [ThemeStyleColorVariant.Contrast]: VenetoColor.White,
        ...getGrayData(),
        ...getBackgroundColorData()
      }
    },
    [StyleVariant.Danger]: {
      state: getStateData(VenetoColor.Salmon),
      color: {
        [ThemeStyleColorVariant.Light]: VenetoColor.MediumSalmon,
        [ThemeStyleColorVariant.Main]: VenetoColor.Salmon,
        [ThemeStyleColorVariant.Dark]: VenetoColor.DarkSalmon,
        [ThemeStyleColorVariant.Contrast]: VenetoColor.White,
        ...getGrayData(),
        ...getBackgroundColorData()
      }
    },
    [StyleVariant.Warning]: {
      state: getStateData(VenetoColor.Orange),
      color: {
        [ThemeStyleColorVariant.Light]: VenetoColor.MediumOrange,
        [ThemeStyleColorVariant.Main]: VenetoColor.Orange,
        [ThemeStyleColorVariant.Dark]: VenetoColor.DarkOrange,
        [ThemeStyleColorVariant.Contrast]: VenetoColor.White,
        ...getGrayData(),
        ...getBackgroundColorData()
      }
    },
    [StyleVariant.Success]: {
      state: getStateData(VenetoColor.Green),
      color: {
        [ThemeStyleColorVariant.Light]: VenetoColor.LightGreen,
        [ThemeStyleColorVariant.Main]: VenetoColor.Green,
        [ThemeStyleColorVariant.Dark]: VenetoColor.DarkGreen,
        [ThemeStyleColorVariant.Contrast]: VenetoColor.White,
        ...getGrayData(),
        ...getBackgroundColorData()
      }
    },
    [StyleVariant.Info]: {
      state: getStateData(VenetoColor.Blue),
      color: {
        [ThemeStyleColorVariant.Light]: VenetoColor.LightBlue,
        [ThemeStyleColorVariant.Main]: VenetoColor.Blue,
        [ThemeStyleColorVariant.Dark]: VenetoColor.DarkBlue,
        [ThemeStyleColorVariant.Contrast]: VenetoColor.White,
        ...getGrayData(),
        ...getBackgroundColorData()
      }
    },
    [StyleVariant.BlackWhite]: {
      state: getStateData(VenetoColor.Black),
      color: {
        [ThemeStyleColorVariant.Light]: VenetoColor.MediumGray,
        [ThemeStyleColorVariant.Main]: VenetoColor.Black,
        [ThemeStyleColorVariant.Dark]: VenetoColor.DarkGray,
        [ThemeStyleColorVariant.Contrast]: VenetoColor.White,
        ...getGrayData(),
        ...getBackgroundColorData()
      }
    }
  },
  text: {
    [TextVariant.H1]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Light,
      fontSize: 96,
      case: FontConfigCase.None,
      letterSpacing: -1.5
    },
    [TextVariant.H2]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Light,
      fontSize: 60,
      case: FontConfigCase.None,
      letterSpacing: -0.5
    },
    [TextVariant.H3]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Bold,
      fontSize: 48,
      case: FontConfigCase.None,
      letterSpacing: 0
    },
    [TextVariant.H4]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Bold,
      fontSize: 34,
      case: FontConfigCase.None,
      letterSpacing: 0.25
    },
    [TextVariant.H5]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Bold,
      fontSize: 22,
      case: FontConfigCase.None,
      letterSpacing: 0
    },
    [TextVariant.H6]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Medium,
      fontSize: 18,
      case: FontConfigCase.None,
      letterSpacing: 0.15
    },
    [TextVariant.Subtitle1]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Medium,
      fontSize: 16,
      case: FontConfigCase.None,
      letterSpacing: 0.15
    },
    [TextVariant.Subtitle2]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Medium,
      fontSize: 14,
      case: FontConfigCase.None,
      letterSpacing: 0.1
    },
    [TextVariant.Body1]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Regular,
      fontSize: 16,
      case: FontConfigCase.None,
      letterSpacing: 0.5
    },
    [TextVariant.Body2]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Regular,
      fontSize: 14,
      case: FontConfigCase.None,
      letterSpacing: 0.25
    },
    [TextVariant.Button]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Medium,
      fontSize: 14,
      case: FontConfigCase.UpperCase,
      letterSpacing: 1.25
    },
    [TextVariant.Caption]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Regular,
      fontSize: 12,
      case: FontConfigCase.None,
      letterSpacing: 0.4
    },
    [TextVariant.Overline]: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: TextWeight.Medium,
      fontSize: 10,
      case: FontConfigCase.UpperCase,
      letterSpacing: 1.5
    }
  },
  radius: {
    [RadiusVariant.Large]: 8,
    [RadiusVariant.Medium]: 4,
    [RadiusVariant.Small]: 2
  },
  elevation: {
    [ElevationVariant.Elevation0]: {
      offsetX: 0,
      offsetY: 0,
      blurRadius: 0,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation1]: {
      offsetX: 0,
      offsetY: 1,
      blurRadius: 3,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation2]: {
      offsetX: 0,
      offsetY: 1,
      blurRadius: 5,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation3]: {
      offsetX: 0,
      offsetY: 1,
      blurRadius: 8,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation4]: {
      offsetX: 0,
      offsetY: 2,
      blurRadius: 4,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation6]: {
      offsetX: 0,
      offsetY: 3,
      blurRadius: 5,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation8]: {
      offsetX: 0,
      offsetY: 5,
      blurRadius: 5,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation9]: {
      offsetX: 0,
      offsetY: 5,
      blurRadius: 6,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation12]: {
      offsetX: 0,
      offsetY: 7,
      blurRadius: 8,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation16]: {
      offsetX: 0,
      offsetY: 8,
      blurRadius: 10,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    },
    [ElevationVariant.Elevation24]: {
      offsetX: 0,
      offsetY: 11,
      blurRadius: 15,
      transitionS: 0.5,
      color: colorChangeAlpha(VenetoColor.Black, 0.2)
    }
  }
};
