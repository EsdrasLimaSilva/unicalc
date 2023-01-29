import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebaseConfig";

const getAuthState = async () => {
   const user = new Promise<User | null>((resolve, reject) => {
      onAuthStateChanged(auth, (usr) => {
         if (usr) {
            resolve(usr);
         } else {
            resolve(null);
         }
      });
   });

   return user;
};

export default getAuthState;
