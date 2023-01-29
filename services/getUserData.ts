import { child, get, getDatabase, ref } from "firebase/database";
import { app } from "./firebaseConfig";

const databaseRef = ref(getDatabase(app));

const getUserData = async (userId: string) => {
   try {
      const snapshot = await get(child(databaseRef, `users/${userId}`));

      if (snapshot.exists()) {
         return snapshot.val();
      } else {
         console.log("No data available");
      }
   } catch (error) {
      throw error;
   }
};

export default getUserData;
