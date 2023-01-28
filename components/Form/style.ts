import styled from "styled-components";

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
max-width: 300px;
gap: 8px;
transition: all 0.3s ease-out;

picture {
   width: 160px;

   img{
      width: 100%;
      height: 100%;
   }
}

button{
   border: none;
   background-color: transparent;
   margin-top: 10px;
   font-size: 1rem;
   color: ${({ theme }) => theme.neutral[700]};
   cursor: pointer;
}

button[type="submit"]{
   padding: 8px 16px;
   font-weight: 600;
   background-color: ${({ theme }) => theme.action[500]};
   color: ${({ theme }) => theme.neutral[100]};
   box-shadow: 0 1px 3px ${({ theme }) => theme.neutral[300]};
   margin-top: 50px;

   &:hover{
   background-color: ${({ theme }) => theme.action[600]};
   }
}

@media (max-width: 376px){
}

`;

export default StyledForm;
