import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  Select
} from "@chakra-ui/react"

export default function RandomForm() {
  const [params, setParams] = useState({
    nodes: 0,
    prob: '0',
    layout: 'random'
  });

  const handleNodeChange = (valStr: string, valNum: number) => {
    if (isNaN(valNum)) {
      valNum = 0;
    }

    setParams({
      ...params,
      nodes: valNum
    })
  }

  const handleProbChange = (valStr: string, valNum: number) => {
    setParams({
      ...params,
      prob: valStr
    })
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setParams({
      ...params,
      [name]: value
    })
  }

  console.log(params);

  return (
    <form action="">
      <FormControl id='nodes' isRequired mt={3}>
        <FormLabel color='#241664'>Number of Nodes</FormLabel>
        <NumberInput 
          value={params.nodes} 
          onChange={handleNodeChange}
          min={0} 
          max={500}
          inputMode='numeric'
        >
          <NumberInputField
            color='#241664' 
            border='1px' 
            borderColor='#241664'
            _hover={{
              borderColor: '#7b7a7a'
            }}
            _focus={{
              borderColor: '#7b7a7a'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='#241664' />
            <NumberDecrementStepper color='#241664' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='#7b7a7a'>0 to 500</FormHelperText>
      </FormControl>
      <FormControl id='prob' isRequired mt={3}>
        <FormLabel color='#241664'>Probability of an Edge Between Two Nodes</FormLabel>
        <NumberInput
          value={params.prob}
          onChange={handleProbChange}
          step={0.01}
          min={0} 
          max={1}
          inputMode='decimal'
        >
          <NumberInputField
            color='#241664' 
            border='1px' 
            borderColor='#241664'
            _hover={{
              borderColor: '#7b7a7a'
            }}
            _focus={{
              borderColor: '#7b7a7a'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='#241664' />
            <NumberDecrementStepper color='#241664' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='#7b7a7a'>0 to 1</FormHelperText>
      </FormControl>
      <FormControl id='layout' isRequired mt={3}>
        <FormLabel color='#241664'>Layout</FormLabel>
        <Select
          name='layout'
          value={params.layout}
          onChange={handleSelectChange}
          color='#241664'
          backgroundColor='#f8f8ff'
          border='1px' 
          borderColor='#241664'
          _hover={{
            borderColor: '#7b7a7a'
          }}
          _focus={{
            borderColor: '#7b7a7a'
          }}
        >
          <option value="random" style={{backgroundColor: '#f8f8ff'}}>Random</option>
          <option value="grid" style={{backgroundColor: '#f8f8ff'}}>Grid</option>
          <option value="circle" style={{backgroundColor: '#f8f8ff'}}>Circle</option>
          <option value="concentric" style={{backgroundColor: '#f8f8ff'}}>Concentric</option>
          <option value="breadthfirst" style={{backgroundColor: '#f8f8ff'}}>Breadthfirst</option>
          <option value="cose" style={{backgroundColor: '#f8f8ff'}}>Cose</option>
        </Select>
      </FormControl>
    </form>
  );
}