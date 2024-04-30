import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, doc, query, where } from "firebase/firestore";
import useUserProfileStore from "../../public/store/userProfileStore";

const useGetUserByUsername = () => {
    const [isLoading, setIsLoading] = useState(true);
    const showToast = useShowToast();
    const {userProfile, setUserProfile} = useUserProfileStore()

    useEffect(()=>{
        const getUserProfile = async() => {
            try{
                const q = query(collection(firestore,"users").where("username", "=="))
                const querySnapshot = await getDocs(q);
                if(querySnapshot.empty) return setUserProfile(null);
                let userDoc;
                querySnapshot.forEach((doc) => {
                    userDoc = doc.data();
                });
                setUserProfile(doc)
            } catch(error){
                showToast("Error", error.message,"error");

            }
        }
    },[setUserProfile, username, showToast])
}

export default useGetUserByUsername;