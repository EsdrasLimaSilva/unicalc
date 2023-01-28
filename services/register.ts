import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const registerUser = async (email: string, password: string, name: string, course: string) => {
   try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log(credentials);

      return credentials;
   } catch (error) {
      throw error;
   }
};

export default registerUser;
