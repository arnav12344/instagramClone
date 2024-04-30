import React from 'react'
import {useSignOut} from 'react-firebase-hooks/auth'
import useShowToast from './useShowToast';
import useAuthStore from '../../public/store/authStore';
const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast()
  const logoutUser = useAuthStore((state)=> state.logout)
  const handleLogout = async ()=> {
    try{
        await signOut();
        localStorage.removeItem('user-info')
        logoutUser();
        console.log("Logged out")
    } catch (error) {
        showToast('Error', error.message,'error')
    }
  }
  return {logout,isLoggingOut, error}
}

export default useLogout