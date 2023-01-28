import useToggleFormMode from "@/hooks/useToggleFormMode";
import { changeToSignIn } from "@/redux/slices/loginSlice";
import Form from "../Form";
import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import registerUser from "@/services/register";
import { ErrorMessage } from "@hookform/error-message";
import Spinner from "../spinner";
import writeUserData from "@/services/writeUserData";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/router";

const SignUpForm = () => {
   //local states and control
   const [creatingUser, setCreatingUser] = useState(false);
   const [loginError, setLoginError] = useState({
      happened: false,
      message: "",
   });
   const router = useRouter();

   const toggleToSignIn = useToggleFormMode(changeToSignIn);

   // form validation
   const formSchema = yup.object().shape({
      name: yup.string().required("preencha seu email"),
      course: yup.string().required("preencha seu curso"),
      email: yup.string().required("preencha seu email"),
      password: yup.string().required("preencha sua senha").min(8, "mínimo 8 caracteres"),
      confirmPassword: yup
         .string()
         .required("confirme sua senha")
         .oneOf([yup.ref("password")], "senhas não batem"),
   });

   const formOptions = { resolver: yupResolver(formSchema) };
   const { register, handleSubmit, formState } = useForm(formOptions);
   const { errors } = formState;

   // submit function
   const submit = async (data: any) => {
      try {
         setCreatingUser(true);
         const { name, course, email, password } = data;
         const { user } = await registerUser(email, password, name, course);

         await writeUserData(user.uid, name, email, course);
         router.replace("/");
      } catch (error) {
         const errorCode = (error as FirebaseError).code;

         const errorMessage =
            errorCode == "auth/email-already-in-use"
               ? "O email informado já está em uso"
               : errorCode;

         setLoginError((prev) => ({ ...prev, happened: true, message: errorMessage }));
      } finally {
         setCreatingUser(false);

         setTimeout(() => {
            setLoginError((prev) => ({ ...prev, happened: false, message: "" }));
         }, 3000);
      }
   };

   if (creatingUser) return <Spinner />;

   return (
      <>
         <Form onSubmit={handleSubmit(submit)}>
            <ErrorMessage
               errors={errors}
               name="name"
               render={({ message }) => <span className="warning-form">{message}</span>}
            />
            <Input type="text" placeholder="nome" {...register("name")} />

            <ErrorMessage
               errors={errors}
               name="course"
               render={({ message }) => <span className="warning-form">{message}</span>}
            />
            <Input type="text" placeholder="curso" {...register("course")} />

            <ErrorMessage
               errors={errors}
               name="email"
               render={({ message }) => <span className="warning-form">{message}</span>}
            />
            <Input type="email" placeholder="email" {...register("email")} />

            <ErrorMessage
               errors={errors}
               name="password"
               render={({ message }) => <span className="warning-form">{message}</span>}
            />
            <Input type="password" placeholder="senha" {...register("password")} />

            <ErrorMessage
               errors={errors}
               name="confirmPassword"
               render={({ message }) => <span className="warning-form">{message}</span>}
            />
            <Input type="password" placeholder="confirmar senha" {...register("confirmPassword")} />

            <button type="button" onClick={toggleToSignIn}>
               entrar com uma conta
            </button>

            {loginError.happened && <p className="login-error">{loginError.message}</p>}

            <button type="submit">criar conta</button>
         </Form>
      </>
   );
};

export default SignUpForm;
