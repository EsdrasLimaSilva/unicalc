/* eslint-disable @next/next/no-img-element */

import LoginForm from "@/components/LoginForm";
import StyledLogin from "@/styles/login";
import Head from "next/head";
import Figure from "../components/Figure";

const Login = () => {
   return (
      <>
         <Head>
            <title>Unicalc | Login</title>
         </Head>
         <StyledLogin>
            <Figure source="./wave1.svg" />
            <LoginForm />
            <Figure source="./wave2.svg" />
         </StyledLogin>
      </>
   );
};

export default Login;
