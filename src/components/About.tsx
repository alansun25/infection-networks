import React from "react";
import { 
  Heading, 
  Box, 
  Text, 
  Accordion, 
  AccordionButton, 
  AccordionIcon, 
  AccordionItem, 
  AccordionPanel } from "@chakra-ui/react";

export default function About() {
  return (
    <Box
      p='4' 
      m='4' 
      border='1px' 
      borderColor='#241664' 
      borderRadius='md' 
      shadow='xl'
      bg='#f8f8ff'
    >
      <Heading as='h1' size='md' color='#241664'>About</Heading>
      <Accordion mt={1} allowToggle>
        <AccordionItem color='#241664'>
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

        <AccordionItem color='#241664'>
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

        <AccordionItem color='#241664'>
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
    </Box> 
  );
}