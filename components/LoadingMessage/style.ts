import styled from "styled-components";

const StyledLoadingMessage = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 200px;
   color: ${({ theme }) => theme.primary[700]};
   text-align: center;
   gap: 0px;
   user-select: none;
   transition: all 0.3s;
   margin: 25vh auto 0 auto;
   

   h2{
      font-size: 1rem;
      margin-top: 12px;
      margin-bottom: 8px;
   }
`;

export default StyledLoadingMessage;
