import React from "react";
import { 
  Box, 
  Button, 
  Link,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';

export default function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pt={2} pr={4}>
      <InfoOutlineIcon 
        onClick={onOpen} 
        h={5} 
        w={5} 
        color='gray.700'
        _hover={{
          color: 'gray.500'
        }}
        transition='0.1s'
        cursor='pointer'
      />

      <Modal onClose={onClose} isOpen={isOpen} size='xl' isCentered>
        <ModalOverlay />
        <ModalContent bg='#f8f8ff'>
          <ModalHeader color='gray.700'>About</ModalHeader>
          <ModalCloseButton color='gray.700'/>
          <ModalBody>
            <Text color='gray.700'>
              Hi! I'm Alan, a college student studying Computer Science and Statistics. In the summer of 2021, I worked with a professor on some 
              research in the field of <Link isExternal 
                href="https://en.wikipedia.org/wiki/Network_science" color='gray.600' textDecor='underline'>
                  network science
              </Link> and 
              studied some pretty interesting models for generating random graphs – namely, the <Link isExternal href="https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model" color='gray.600' textDecor='underline'>
                Erdős–Rényi
              </Link> (random)  and <Link isExternal href="https://en.wikipedia.org/wiki/Watts%E2%80%93Strogatz_model" color='gray.600' textDecor='underline'>
                Watts-Strogatz
              </Link> (small-world) models. My research inspired me to build this web app to help you visualize any random network (up to n = 200)
              that can be generated using either of these models (I'm also self-studying a third model and will be adding that one soon). 
            </Text>
            <Text color='gray.700' mt={2}>
              Random graphs are extremely useful for modeling a wide array of real-life networks. Most of my summer research focused on one
              category of real-life networks: social networks. Social networks are extremely relevant in daily life and are especially
              of interest right now due to the COVID-19 pandemic and contact tracing. This is essentially the premise of this web app: a tool
              to enable you to visualize how a hypothetical disease will spread through a randomly generated social network.
            </Text>
            <Text color='gray.700' mt={2}>
              Currently, you can generate the random graphs. I'm still working on adding the ability to create diseases. Later on, you
              will also be able create an account and save populations/diseases that you create.
            </Text>
            <Text color='gray.700' mt={2}>
              Here is the <Link isExternal href='https://github.com/alansun25/infection-networks' color='gray.600' textDecor='underline'>source code</Link> for this project.
              If you have any questions, ideas, or comments, feel free to contact me at <Link isExternal href='mailto:as50@williams.edu' color='gray.600' textDecor='underline'>as50@williams.edu</Link>.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button 
              onClick={onClose} 
              color="#f8f8ff"
              bgColor="gray.700"
              fontWeight="normal"
              _hover={{ bg: 'gray.600' }}
              _active={{ bg: 'gray.800' }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}