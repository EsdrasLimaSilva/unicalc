import LoadingMessage from "@/components/LoadingMessage";
import Spinner from "@/components/spinner";
import { setUser } from "@/redux/slices/loginSlice";
import getAuthState from "@/services/getAuthState";
import getUserData from "@/services/getUserData";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
   const [gettingUser, setGettingUser] = useState(true);
   const dispatch = useDispatch();
   const router = useRouter();

   useEffect(() => {
      (async () => {
         const user = await getAuthState();
         if (user) {
            const data = await getUserData(user.uid);
            dispatch(
               setUser({
                  username: data.username,
                  course: data.course,
                  imageUrl: data.profilePicture,
                  email: data.email,
               }),
            );

            setTimeout(() => {
               setGettingUser(false);
            }, 1500);
         } else {
            router.replace("/login");
         }
      })();
   }, [dispatch, router]);

   if (!gettingUser) {
      return (
         <>
            <Head>
               <title>Unicalc | Home</title>
            </Head>
            <h2>Hello World</h2>
         </>
      );
   }

   return <LoadingMessage />;
};

export default Home;
