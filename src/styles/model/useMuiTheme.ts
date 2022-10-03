import { createMuiTheme, useTheme } from "@material-ui/core";
import { Shadows } from "@material-ui/core/styles/shadows";
import { useMemo } from "react";
import { pxToRem } from "./dimension";
import { Theme, ThemeStyleColorVariant } from "./theme";
import {
  getThemeElevation,
  getThemeStyleColor,
  getThemeStyleState
} from "./themeUtils";
import { ElevationVariant, StyleVariant } from "./themeVariant";

export type MuiTheme = ReturnType<typeof createMuiTheme>;

const muiShadowElevationMap: ElevationVariant[] = [
  ElevationVariant.Elevation0,
  ElevationVariant.Elevation1,
  ElevationVariant.Elevation2,
  ElevationVariant.Elevation3,
  ElevationVariant.Elevation4,
  ElevationVariant.Elevation4,
  ElevationVariant.Elevation6,
  ElevationVariant.Elevation6,
  ElevationVariant.Elevation8,
  ElevationVariant.Elevation9,
  ElevationVariant.Elevation9,
  ElevationVariant.Elevation9,
  ElevationVariant.Elevation12,
  ElevationVariant.Elevation12,
  ElevationVariant.Elevation12,
  ElevationVariant.Elevation12,
  ElevationVariant.Elevation16,
  ElevationVariant.Elevation16,
  ElevationVariant.Elevation16,
  ElevationVariant.Elevation16,
  ElevationVariant.Elevation16,
  ElevationVariant.Elevation16,
  ElevationVariant.Elevation16,
  ElevationVariant.Elevation16,
  ElevationVariant.Elevation24
];

const getMuiShadow = (theme: Theme, index: number): string => {
  const getElevationShadow = (variant: ElevationVariant) => {
    const config = getThemeElevation(theme, variant);
    return `${pxToRem(config.offsetX)} ${pxToRem(config.offsetY)} ${pxToRem(
      config.blurRadius
    )} ${config.color}`;
  };
  const elevationVariant = muiShadowElevationMap[index];
  if (index === 0 || elevationVariant === undefined) return "none";
  return getElevationShadow(elevationVariant);
};

export const getThemeMuiTheme = (
  theme: Theme,
  variant: StyleVariant,
  overrides?: Record<string, unknown>
): MuiTheme =>
  createMuiTheme({
    palette: {
      primary: {
        light: getThemeStyleColor(theme, variant, ThemeStyleColorVariant.Light),
        main: getThemeStyleColor(theme, variant, ThemeStyleColorVariant.Main),
        dark: getThemeStyleColor(theme, variant, ThemeStyleColorVariant.Dark),
        contrastText: getThemeStyleColor(
          theme,
          variant,
          ThemeStyleColorVariant.Contrast
        )
      },
      error: {
        light: getThemeStyleColor(
          theme,
          StyleVariant.Danger,
          ThemeStyleColorVariant.Light
        ),
        main: getThemeStyleColor(
          theme,
          StyleVariant.Danger,
          ThemeStyleColorVariant.Main
        ),
        dark: getThemeStyleColor(
          theme,
          StyleVariant.Danger,
          ThemeStyleColorVariant.Dark
        ),
        contrastText: getThemeStyleColor(
          theme,
          StyleVariant.Danger,
          ThemeStyleColorVariant.Contrast
        )
      },
      action: getThemeStyleState(theme, variant)
    },
    shadows: Array.from({ length: 25 }, (_, i) =>
      getMuiShadow(theme, i)
    ) as Shadows,
    overrides
  });

export type MuiOverridesType = Record<string, unknown>;

export const useMuiTheme = (
  style: StyleVariant,
  overrides?: MuiOverridesType
): MuiTheme => {
  const theme = useTheme<Theme>();
  return useMemo(
    () => getThemeMuiTheme(theme, style, overrides),
    [theme, style, overrides]
  );
};
