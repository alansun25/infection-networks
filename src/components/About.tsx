import React from "react";
import { 
  Heading, 
  Box, 
  Button, 
  Accordion, 
  AccordionButton, 
  AccordionIcon, 
  AccordionItem, 
  AccordionPanel, 
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
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
        color='#2D3748'
        _hover={{
          color: 'gray.500'
        }}
        transition='0.1s'
        cursor='pointer'
      />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg='#f8f8ff'>
          <ModalHeader color='#2D3748'>About</ModalHeader>
          <ModalCloseButton color='#2D3748'/>
          <ModalBody>
            <Accordion allowToggle>
              <AccordionItem color='#2D3748'>
                <h2>
                  <AccordionButton _focus={{}}>
                    <Box flex="1" textAlign="left">
                      Random
                    </Box>
                    <AccordionIcon/>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem color='#2D3748'>
                <h2>
                  <AccordionButton _focus={{}}>
                    <Box flex="1" textAlign="left">
                      Small-world
                    </Box>
                    <AccordionIcon/>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem color='#2D3748'>
                <h2>
                  <AccordionButton _focus={{}}>
                    <Box flex="1" textAlign="left">
                      Preferential Attachment
                    </Box>
                    <AccordionIcon/>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ModalBody>
          <ModalFooter>
            <Button 
              onClick={onClose} 
              bg='teal.500'
              _hover={{ bg: 'teal.400' }}
              _active={{ bg: 'teal.600' }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}