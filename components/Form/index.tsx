import { FormHTMLAttributes, HTMLAttributes, ReactNode, useEffect, useRef } from "react";
import StyledForm from "./style";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
   children: ReactNode;
}

const Form = ({ children, ...rest }: Props) => {
   const formRef = useRef(null);

   //sets the fade in animation
   useEffect(() => {
      const form = formRef.current! as HTMLFormElement;
      setTimeout(() => {
         form.style.transform = "translateX(0px)";
         form.style.opacity = "1";
      }, 50);

      return () => {
         form.style.transform = "translateX(-100px)";
         form.style.opacity = "0";
      };
   }, []);

   return (
      <StyledForm {...rest} ref={formRef}>
         <picture>
            <img src="./logo.svg" alt="logo da unicalc" />
         </picture>

         {children}
      </StyledForm>
   );
};

export default Form;
