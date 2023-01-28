import { changeToSignUp } from "@/redux/slices/loginSlice";
import { useDispatch } from "react-redux";
import Input from "../Input";
import Form from "../Form";
import useToggleFormMode from "@/hooks/useToggleFormMode";

const SignInForm = () => {
   const toggleToSignUp = useToggleFormMode(changeToSignUp);

   return (
      <Form>
         <Input placeholder="email" type="email" name="signin-email-input" />
         <Input placeholder="senha" type="password" name="signin-password-input" />

         <button type="button" onClick={toggleToSignUp}>
            criar conta
         </button>

         <button type="submit">entrar</button>
      </Form>
   );
};

export default SignInForm;
