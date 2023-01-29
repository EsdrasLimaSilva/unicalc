/* eslint-disable @next/next/no-img-element */

import LoginForm from "@/components/LoginForm";
import { setUser } from "@/redux/slices/loginSlice";
import getAuthState from "@/services/getAuthState";
import getUserData from "@/services/getUserData";
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

// export async function getServerSideProps() {
//    try{
//       const user = await getAuthState();
//    console.log(user);
//    }catch(error){
//       return {
//          props: {}
//       }
//    }

//    return {
//       props: {},
//       redirec
//    };
// }

export default Login;
