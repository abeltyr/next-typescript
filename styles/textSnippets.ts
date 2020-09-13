import { css, FlattenSimpleInterpolation } from "styled-components";

type TextSnippets = {
  medium_12: FlattenSimpleInterpolation;
  medium_14: FlattenSimpleInterpolation;
  medium_16: FlattenSimpleInterpolation;
  medium_18: FlattenSimpleInterpolation;
  medium_24: FlattenSimpleInterpolation;
  bold_12: FlattenSimpleInterpolation;
  bold_14: FlattenSimpleInterpolation;
  bold_16: FlattenSimpleInterpolation;
  bold_18: FlattenSimpleInterpolation;
  bold_24: FlattenSimpleInterpolation;
  bold_36: FlattenSimpleInterpolation;
  bold_48: FlattenSimpleInterpolation;
};

const textSnippets: TextSnippets = {
  medium_12: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
  `,
  medium_14: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  `,
  medium_16: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  `,
  medium_18: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  `,
  medium_24: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  `,
  bold_12: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 22px;
  `,
  bold_14: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
  `,
  bold_16: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
  `,
  bold_18: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
  `,
  bold_24: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
  `,
  bold_36: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
  `,
  bold_48: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
  `,
} as const;

export { textSnippets };