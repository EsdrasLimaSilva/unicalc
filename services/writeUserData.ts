import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebaseConfig";

const writeUserData = async (
   userId: string,
   username: string,
   email: string,
   course: string,
   imageUrl: string = "",
) => {
   const database = getDatabase(app);
   await set(ref(database, `users/${userId}`), {
      username,
      email,
      course,
      profilePicture: imageUrl,
   });
};

export default writeUserData;
