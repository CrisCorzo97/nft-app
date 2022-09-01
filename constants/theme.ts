export const COLORS = {
  primary: "#7862F8",
  secondary: "#C8F560",
  black: "#21251F",
  white: "#EBF1F1",
  gray: "#4E515C",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "AlbertSansBold",
  semiBold: "AlbertSansSemiBold",
  medium: "AlbertSansMedium",
  regular: "AlbertSansRegular",
  light: "AlbertSansLight",
};

type ShadowOffset = {
  width: number;
  height: number;
};

export type ShadowType = {
  shadowColor: string;
  shadowOffset: ShadowOffset;
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

type Shadows = {
  light: ShadowType;
  medium: ShadowType;
  dark: ShadowType;
};

export const SHADOWS: Shadows = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
