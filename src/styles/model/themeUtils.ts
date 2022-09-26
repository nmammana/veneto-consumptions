import { defaultTheme } from "./defaultTheme";
import {
  ElevationVariantData,
  Theme,
  ThemeStyleColorVariant,
  ThemeStyleVariantData,
  ThemeStyleVariantStateData
} from "./theme";
import { ElevationVariant, StyleVariant } from "./themeVariant";

const getSafeTheme = (theme?: Theme): Theme =>
  theme?.isComponentTheme === true ? theme : defaultTheme;

export const getSafeThemeStyle = (
  theme: Theme,
  style: StyleVariant
): ThemeStyleVariantData =>
  getSafeTheme(theme).style[style] ?? defaultTheme.style[style];

export const getThemeStyleColor = (
  theme: Theme,
  style: StyleVariant,
  colorVariant = ThemeStyleColorVariant.Main
): string =>
  getSafeThemeStyle(theme, style).color[colorVariant] ??
  defaultTheme.style[style].color[colorVariant];

export const getThemeElevation = (
  theme: Theme,
  variant: ElevationVariant
): ElevationVariantData =>
  getSafeTheme(theme).elevation[variant] ?? defaultTheme.elevation[variant];

export const getThemeStyleState = (
  theme: Theme,
  style: StyleVariant
): ThemeStyleVariantStateData => getSafeThemeStyle(theme, style).state;
