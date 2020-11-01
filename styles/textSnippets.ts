import { css, SerializedStyles } from "@emotion/core";

type TextSnippets = {
  medium_12: SerializedStyles;
  medium_14: SerializedStyles;
  medium_16: SerializedStyles;
  medium_18: SerializedStyles;
  medium_24: SerializedStyles;
  bold_12: SerializedStyles;
  bold_14: SerializedStyles;
  bold_16: SerializedStyles;
  bold_18: SerializedStyles;
  bold_24: SerializedStyles;
  bold_36: SerializedStyles;
  bold_48: SerializedStyles;
};

const textSnippets: TextSnippets = {
  medium_12: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
  `,
  medium_14: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  `,
  medium_16: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  `,
  medium_18: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  `,
  medium_24: css`
    font-family: "Lora Medium", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  `,
  bold_12: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 22px;
  `,
  bold_14: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
  `,
  bold_16: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
  `,
  bold_18: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
  `,
  bold_24: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
  `,
  bold_36: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
  `,
  bold_48: css`
    font-family: "Lora Bold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
  `,
} as const;

export { textSnippets };
