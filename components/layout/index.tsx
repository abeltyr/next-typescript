import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Global, css } from "@emotion/core";
import { theme } from "../../styles/theme"
import { Container } from "./style"
type Props = {
  children?: ReactNode
  title?: string
}
const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <Container>
      <Global
        styles={
          css`
        html {
            box-sizing: border-box;
            font-family: "Lora", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            scroll-behavior: smooth;
            /* user-select: none; */
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
            font-family: "Lora", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            outline: 0;
          }
          body {
            margin: 0px;
            padding: 0px;
            font-family: Lora;
            /* font-family: "Lora", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
            color: ${theme.grey2};
            background-color: ${theme.grey5};
          }
  
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0px;
            line-height: 18px;
            font-family: "Lora", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          }
          a {
            text-decoration: none;
            color: #575a67;
          }
          .row {
            display: flex;
            align-items: center;
          }
          .link {
            color: ${theme.dark.primary1};
          }
          /* Chrome, Safari, Edge, Opera */
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          /* Firefox */
          input[type="number"] {
            -moz-appearance: textfield;
          }        
        `}
      />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Container>
  )
}

export default Layout

