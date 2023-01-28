import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const signIn = async (email: string, password: string) => {
   try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const { user } = response;
      return user;
   } catch (error) {
      throw error;
   }
};

export default signIn;
