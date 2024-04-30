import {create} from "zustand"

const useUserProfileStore = create((set)=>({
    userProfile: null,
    setUserProfile:(userProfile) => set({userProfile}),
    //addPost:90
}))
export default useUserProfileStore;