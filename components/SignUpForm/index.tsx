import useToggleFormMode from "@/hooks/useToggleFormMode";
import { changeToSignIn } from "@/redux/slices/loginSlice";
import Form from "../Form";
import Input from "../Input";

const SignUpForm = () => {
   const toggleToSignIn = useToggleFormMode(changeToSignIn);

   return (
      <>
         <Form>
            <Input type="text" placeholder="nome" />
            <Input type="text" placeholder="curso" />
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="senha" />
            <Input type="password" placeholder="confirmar senha" />

            <button type="button" onClick={toggleToSignIn}>
               entrar com uma conta
            </button>

            <button type="submit">criar conta</button>
         </Form>
      </>
   );
};

export default SignUpForm;
