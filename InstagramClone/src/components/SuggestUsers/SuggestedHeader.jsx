import {Flex, Avatar, Text,Button, Link} from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../../public/store/authStore'
const SuggestedHeader = () => {
    const {handleLogout, isLoggingOut} = useLogout()
    const authUser = useAuthStore(state=> state.user);
    if(!authUser) return null;
  return (
    
    <Flex justifyContent={"space-between"} alignItems={"center"}w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Link to={'${authUser.username}'}>
            <Avatar size={"lg"} src={authUser.profilePicURL} />
            
            </Link>
            <Link to={'${authUser.username}'}>

                <Text fontSize={12} fontWeight={"bold"}>
                    {auth.username}
                </Text>
            </Link>
        </Flex>
        <Button
        size={"xs"}
        background={"transparent"}
        _hover={{background:"transparent"}}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        >Log out</Button>
    </Flex>
  )
}

export default SuggestedHeader