import styled from "styled-components";

const StyledLogin = styled.div`
   align-items: center;
   display: flex;
   height: 100vh;
   justify-content: center;
   overflow: hidden;
   position: relative;


   .figure{
      position: absolute;
   }

   .figure:first-child{
      top: -5px;
      left: -5px;
   }

   .figure:last-child{
      bottom: -5px;
      right: -5px;
   }



   @media(max-width: 375px){
      .figure:first-child{
      top: -10px;
      left: -70px;
   }

   .figure:last-child{
      bottom: -5px;
      right: -70px;
   }
   }

`;

export default StyledLogin;
