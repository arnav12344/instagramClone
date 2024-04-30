import {VStack, Flex, Text, Box, Link} from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignContent={"center"} justifyContent={"space-between"} w={"full"}>
            <Text>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser name="Aisu<3" followers={5} avatar="https://bit.ly/dan-abramov"/>
        <SuggestedUser name="arnav" followers={123} avatar="https://bit.ly/dan-abramov"/>
        <SuggestedUser name="Arnie&Aisu" followers={12} avatar="https://bit.ly/dan-abramov"/>

        <Box
        fontSize={12}
        color={"gray/500"}
        mt={5}
        alignSelf={"start"}
        >
            2024 Built by {" "}

            <Link href="" target="_blank" color="blue.500" fontSize={14}>
                Arnav Malhotra
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers