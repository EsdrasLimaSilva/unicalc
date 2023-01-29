import { useEffect, useRef } from "react";
import Spinner from "../spinner";
import StyledLoadingMessage from "./style";

const LoadingMessage = () => {
   return (
      <StyledLoadingMessage>
         <img src="./logo.svg" alt="logo da unicalc" />

         <h2>Números não definem quem você é!</h2>
         <Spinner />
      </StyledLoadingMessage>
   );
};

export default LoadingMessage;
