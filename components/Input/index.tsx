import { forwardRef, InputHTMLAttributes, Ref } from "react";
import StyledInput from "./style";

const Input = forwardRef(
   ({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref: Ref<HTMLInputElement>) => {
      return <StyledInput {...props} ref={ref} />;
   },
);

Input.displayName = "Input";

export default Input;
