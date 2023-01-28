import styled from "styled-components";

const StyledInput = styled.input`
background: ${({ theme }) => theme.neutral[100]};
border: none;
box-shadow: 0px 0px 3px ${({ theme }) => theme.neutral[300]};
color: ${({ theme }) => theme.primary[900]};
font-size: 1rem;
font-weight: 500;
outline: none;
padding: 8px 16px;
width: 100%;

&::placeholder{
   color: ${({ theme }) => theme.neutral[500]};
   font-weight: 500;
}

&:focus{
   outline: 2px solid ${({ theme }) => theme.primary[400]};
}
`;

export default StyledInput;
