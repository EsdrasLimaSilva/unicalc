import styled from "styled-components";

const StyledSpinner = styled.span`

display: flex;
justify-content: center;
align-items: center;
width:fit-content;
height:fit-content;
font-size: 2.4rem;
color: ${({ theme }) => theme.primary[600]};
animation: spin 1s infinite linear;

@keyframes spin {
   0%{
      transform: rotate(0deg);
   } 100% {
      transform: rotate(360deg);
   }
}

`;

export default StyledSpinner;
