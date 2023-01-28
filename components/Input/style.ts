import styled from "styled-components";

const StyledInput = styled.input`
padding: 8px 16px;
outline: none;
border: none;
background: ${({ theme }) => theme.neutral[100]};
color: ${({ theme }) => theme.neutral[800]};
font-size: 1rem;
font-weight: 600;
width: 100%;
box-shadow: 0px 0px 3px ${({ theme }) => theme.neutral[300]};

&::placeholder{
   color: ${({ theme }) => theme.neutral[500]};
   font-weight: 500;
}

&:focus{
   outline: 2px solid ${({ theme }) => theme.primary[400]};
}
`;

export default StyledInput;
