import {Flex, Box, Spinner} from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar/Sidebar';
import {useLocation} from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth'
import Navbar from '../../components/Navbar/Navbar';
import { auth } from '../../firebase/firebase';
const PageLayout = ({children}) => {
const {pathname} = useLocation();
const [user, loading, error] = useAuthState(auth);
const canRenderSidebar = pathname !== "/auth" && user;
const canRenderNavbar = !user && !loading && pathname !=="/auth";

const checkingUserIsAuth = !user && loading
if(checkingUserIsAuth) return <PageLayoutSpinner />
  
return (
    <Flex flexDir={canRenderNavbar ?"column" :"row"}>
        {canRenderSidebar ? (
            <Box w={{base:"70px", md:"240px"}}>
              <Sidebar/>
            </Box>
        ): null}
        {canRenderNavbar ? <Navbar />: null}
        <Box flex={1} w={{base:"calc(100%-70px)",md:"calc(100%-240px)"}} mx={"auto"}>
            {children}
        </Box>
    </Flex>
  );
};

export default PageLayout

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};