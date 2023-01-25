import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   html{
      background-color: ${({ theme }) => theme.neutral[200]};
      font-family: Arial, Helvetica, sans-serif;
      color: ${({ theme }) => theme.neutral[900]};
   }
`;

export default GlobalStyle;
