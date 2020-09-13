import { css, FlattenSimpleInterpolation } from "styled-components";

type CssSnippets = {
  stickyView: FlattenSimpleInterpolation;
  truncate: FlattenSimpleInterpolation;
};

const cssSnippets: CssSnippets = {
  stickyView: css`
    height: 100vh;
    position: sticky;
    top: 0px;
  `,
  truncate: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
} as const;

export { cssSnippets };