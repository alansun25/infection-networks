import React, { useEffect, useState } from "react";
import {
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

export default function AlgoSelect() {
  const algoOptions = ['Random', 'Small-world', 'Preferential Attachment'];
  const [ algo, setAlgo ] = useState<string>('Random');

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Random',
    onChange: setAlgo,
  });

  useEffect(() => console.log(algo));

  const group = getRootProps();

  return (
    <Box
      pos='fixed' 
      zIndex='1' 
      h='auto' 
      p='4' 
      m='4' 
      border='1px' 
      borderColor='#241664' 
      borderRadius='md' 
      shadow='lg'
    >
      <FormLabel color='#241664'>Graph Generation Algorithm</FormLabel>
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
    </Box> 
  );
}