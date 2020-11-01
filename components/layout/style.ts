import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
  background: ${theme.dark.primary1};
  position:relative;
`;

