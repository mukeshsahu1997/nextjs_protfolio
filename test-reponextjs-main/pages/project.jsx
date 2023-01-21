import React from 'react'
import { Box, Flex,  Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { BiGitRepoForked } from "react-icons/bi";
import { ImStarEmpty } from "react-icons/im";

const project = ({project}) => {
  return (
    <Box boxShadow='base' w="100%">
    <Heading textAlign={"center"} size="xl" p="20px">Project</Heading>
    <SimpleGrid columns={[1,1,2]} w="98%" m={"auto"} gap="20px">
        {
          project.items.map((el)=>(
            <a key={el.id} href={el.html_url}>
              <Flex flexDir={"column"}  boxShadow='base' rounded={"xl"} p="20px" gap={"10px"}>
                <Text fontSize={"lg"} fontWeight="semibold" color={"gray.800"}>{el.name}</Text>
                <Text fontSize={"sm"}>{el.description}</Text>
                <Flex justifyContent={"space-between"} alignItems="center">
                  <Flex gap={"30px"} >
                    <Flex gap="10px" alignItems={"center"}>
                      <ImStarEmpty/>
                    <Text fontWeight={"semibold"} fontSize="xl">{el.stargazers_count}</Text>
                   </Flex>
                    <Flex gap="10px" alignItems={"center"}>
                      <BiGitRepoForked/>
                    <Text fontWeight={"semibold"} fontSize="xl">{el.forks_count}</Text>
                    
                    </Flex>
                  </Flex>
                  <Text fontSize={"lg"} fontWeight="semibold" color={"gray.800"}>{el.language}</Text>
                </Flex>
              </Flex>
            </a>
          ))
        }
    </SimpleGrid>
  </Box>
  )
}

export async function getStaticProps(){
   let res1=await fetch(`https://api.github.com/search/repositories?q=user:mukeshsahu1997+fork:true&sort=updated&per_page=10&type=Repositories`)
   let data1=await res1.json()
    return {
      props:{
        project:data1
      }
    }
  }

export default project