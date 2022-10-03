export enum FontConfigCase {
  None = "none",
  UpperCase = "uppercase"
}

export interface TextMixinFontConfig {
  fontFamily: string[];
  fontSize: number;
  fontWeight: number;
  case: FontConfigCase;
  letterSpacing?: number;
}
