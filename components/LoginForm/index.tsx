import { selectLogin } from "@/redux/slices/loginSlice";
import { useSelector } from "react-redux";
import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm";

const LoginForm = () => {
   const { mode: formMode } = useSelector(selectLogin);

   if (formMode == "signin") {
      return <SignInForm />;
   }

   return <SignUpForm />;
};

export default LoginForm;
