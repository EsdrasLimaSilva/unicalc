import { changeToSignUp } from "@/redux/slices/loginSlice";
import { useDispatch } from "react-redux";
import Input from "../Input";
import Form from "../Form";
import useToggleFormMode from "@/hooks/useToggleFormMode";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const SignInForm = () => {
   const toggleToSignUp = useToggleFormMode(changeToSignUp);

   const formSchema = yup.object().shape({
      email: yup.string().required("digite seu email"),
      password: yup.string().required("preencha sua senha"),
   });

   const formOptions = { resolver: yupResolver(formSchema) };
   const { register, formState, handleSubmit } = useForm(formOptions);
   const { errors } = formState;

   const submit = async () => {};

   return (
      <Form onSubmit={handleSubmit(submit)}>
         <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <span className="warning-form">{message}</span>}
         />
         <Input placeholder="email" type="email" {...register("email")} />

         <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <span className="warning-form">{message}</span>}
         />
         <Input placeholder="senha" type="password" {...register("password")} />

         <button type="button" onClick={toggleToSignUp}>
            criar conta
         </button>

         <button type="submit">entrar</button>
      </Form>
   );
};

export default SignInForm;
