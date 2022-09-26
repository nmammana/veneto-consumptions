import { Optional } from "../../types/types";
import { Color } from "./color";
import { ElevationConfig } from "./elevation";
import { FontConfigCase, TextMixinFontConfig } from "./text";
import { ElevationVariant, StyleVariant, TextVariant } from "./themeVariant";

export interface ThemeStyleVariantStateData {
  active: Color;
  hover: Color;
  hoverOpacity: number;
  selected: Color;
  selectedOpacity: number;
  disabled: Color;
  disabledBackground: Color;
  disabledOpacity: number;
  focus: Color;
  focusOpacity: number;
  activatedOpacity: number;
}

export enum ThemeStyleColorVariant {
  Main = "Main",
  Light = "Light",
  Dark = "Dark",
  Contrast = "Contrast",
  GrayDark = "GrayDark",
  GrayMedium = "GrayMedium",
  GrayLight = "GrayLight",
  Background = "Background"
}

export interface ThemeStyleVariantData {
  color: Record<ThemeStyleColorVariant, Optional<Color>>;
  state: ThemeStyleVariantStateData;
}

export type ThemeStyleData = Record<
  StyleVariant,
  Optional<ThemeStyleVariantData>
>;

export type ThemeTextVariantData = TextMixinFontConfig;

export type ThemeTextData = Record<TextVariant, Optional<ThemeTextVariantData>>;

export enum RadiusVariant {
  Large = "Large",
  Medium = "Medium",
  Small = "Small"
}

export type RadiusData = Record<RadiusVariant, Optional<number>>;

export type ElevationVariantData = ElevationConfig;

export type ElevationData = Record<
  ElevationVariant,
  Optional<ElevationVariantData>
>;

export interface Theme {
  isComponentTheme: true;
  style: ThemeStyleData;
  text: ThemeTextData;
  radius: RadiusData;
  elevation: ElevationData;
}
const emptyStyle: ThemeStyleVariantData = {
  color: {
    [ThemeStyleColorVariant.Light]: "",
    [ThemeStyleColorVariant.Main]: "",
    [ThemeStyleColorVariant.Dark]: "",
    [ThemeStyleColorVariant.Contrast]: "",
    [ThemeStyleColorVariant.GrayDark]: "",
    [ThemeStyleColorVariant.GrayMedium]: "",
    [ThemeStyleColorVariant.GrayLight]: "",
    [ThemeStyleColorVariant.Background]: ""
  },
  state: {
    hoverOpacity: 0,
    focusOpacity: 0,
    selectedOpacity: 0,
    activatedOpacity: 0,
    hover: "",
    focus: "",
    selected: "",
    active: "",
    disabledOpacity: 0,
    disabled: "",
    disabledBackground: ""
  }
};

const emptyText: ThemeTextVariantData = {
  fontFamily: [],
  fontWeight: 0,
  fontSize: 0,
  case: FontConfigCase.None,
  letterSpacing: 0
};

const emptyElevation: ElevationConfig = {
  offsetX: 0,
  offsetY: 0,
  blurRadius: 0,
  transitionS: 0,
  color: ""
};

export const emptyTheme: Theme = {
  isComponentTheme: true,
  style: {
    [StyleVariant.Primary]: emptyStyle,
    [StyleVariant.Secondary]: emptyStyle,
    [StyleVariant.Danger]: emptyStyle,
    [StyleVariant.Warning]: emptyStyle,
    [StyleVariant.Success]: emptyStyle,
    [StyleVariant.Info]: emptyStyle,
    [StyleVariant.BlackWhite]: emptyStyle
  },
  text: {
    [TextVariant.H1]: emptyText,
    [TextVariant.H2]: emptyText,
    [TextVariant.H3]: emptyText,
    [TextVariant.H4]: emptyText,
    [TextVariant.H5]: emptyText,
    [TextVariant.H6]: emptyText,
    [TextVariant.Subtitle1]: emptyText,
    [TextVariant.Subtitle2]: emptyText,
    [TextVariant.Body1]: emptyText,
    [TextVariant.Body2]: emptyText,
    [TextVariant.Button]: emptyText,
    [TextVariant.Caption]: emptyText,
    [TextVariant.Overline]: emptyText
  },
  radius: {
    [RadiusVariant.Large]: 0,
    [RadiusVariant.Medium]: 0,
    [RadiusVariant.Small]: 0
  },
  elevation: {
    [ElevationVariant.Elevation0]: emptyElevation,
    [ElevationVariant.Elevation1]: emptyElevation,
    [ElevationVariant.Elevation2]: emptyElevation,
    [ElevationVariant.Elevation3]: emptyElevation,
    [ElevationVariant.Elevation4]: emptyElevation,
    [ElevationVariant.Elevation6]: emptyElevation,
    [ElevationVariant.Elevation8]: emptyElevation,
    [ElevationVariant.Elevation9]: emptyElevation,
    [ElevationVariant.Elevation12]: emptyElevation,
    [ElevationVariant.Elevation16]: emptyElevation,
    [ElevationVariant.Elevation24]: emptyElevation
  }
};
