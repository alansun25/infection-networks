import React, { useEffect, useState } from "react";
import {
  Heading,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  VStack,
  Radio,
  Text,
  useRadioGroup,
  HStack
} from "@chakra-ui/react";
import RadioCard from "./RadioCard.jsx";
import RandomForm from "./algo-forms/RandomForm";
import SmallWorldForm from "./algo-forms/SmallWorldForm";
import PreferentialForm from "./algo-forms/PreferentialForm";

export default function Settings() {
  const algoOptions = ['Random', 'Small-world', 'Preferential Attachment'];
  const [algo, setAlgo] = useState<string>('Random');

  // Random graph algorithm settings
  const [rs, setRs] = useState({
    n: 0,
    p: '0',
    l: 'random'
  })

  // Small world graph algorithm settings
  const [sw, setSw] = useState({
    n: 0,
    p: '0',
    k: 0,
    l: 'random'
  })

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Random',
    onChange: setAlgo,
  });

  useEffect(() => console.log(algo));

  const group = getRootProps();

  return (
    <Box
      p={4} 
      m={4} 
      border='1px' 
      borderColor='#2D3748' 
      borderRadius='md' 
      shadow='xl'
      bg='#f8f8ff'
    >
      <Heading as='h1' size='md' color='#2D3748'>Graph Settings</Heading>
      <FormLabel color='#2D3748' mt={3}>Generation Algorithm</FormLabel>
      <HStack {...group}>
        {algoOptions.map(value => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
      <Box mb={-3}>
        {algo === 'Random' ? <RandomForm/> : (algo === 'Small-world' ? <SmallWorldForm/> : <PreferentialForm/>)};
      </Box>
    </Box> 
  );
}