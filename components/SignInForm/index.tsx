import { changeToSignUp } from "@/redux/slices/loginSlice";
import { useDispatch } from "react-redux";
import Input from "../Input";
import Form from "../Form";
import useToggleFormMode from "@/hooks/useToggleFormMode";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import signIn from "@/services/signin";
import { FirebaseError } from "firebase/app";
import Spinner from "../spinner";
import { useRouter } from "next/router";

const SignInForm = () => {
   // local state and control
   const [gettingUser, setGettingUser] = useState(false);
   const [loginError, setLoginError] = useState({ happened: false, message: "" });
   const router = useRouter();

   const toggleToSignUp = useToggleFormMode(changeToSignUp);

   const formSchema = yup.object().shape({
      email: yup.string().required("digite seu email"),
      password: yup.string().required("preencha sua senha"),
   });

   const formOptions = { resolver: yupResolver(formSchema) };
   const { register, formState, handleSubmit } = useForm(formOptions);
   const { errors } = formState;

   const submit = async (data: FieldValues) => {
      try {
         setGettingUser(true);
         const { email, password } = data;
         await signIn(email, password);

         router.replace("/");
      } catch (error) {
         const errorCode = (error as FirebaseError).code;

         switch (errorCode) {
            case "auth/wrong-password":
               setLoginError((prev) => ({ ...prev, happened: true, message: "Senha incorreta" }));
               break;
            case "auth/user-not-found":
               setLoginError((prev) => ({
                  ...prev,
                  happened: true,
                  message: "Email não registrado",
               }));
               break;
            default:
               setLoginError((prev) => ({
                  ...prev,
                  happened: true,
                  message: errorCode,
               }));
         }

         console.log(error);
      } finally {
         if (loginError.happened) setGettingUser(false);

         setTimeout(() => {
            setLoginError((prev) => ({
               ...prev,
               happened: false,
               message: "",
            }));
         }, 5000);
      }
   };

   if (gettingUser) return <Spinner />;

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

         {loginError.happened && <p className="login-error">{loginError.message}</p>}

         <button type="submit">entrar</button>
      </Form>
   );
};

export default SignInForm;
