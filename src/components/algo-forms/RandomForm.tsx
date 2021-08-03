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
        <FormLabel color='#2D3748'>Number of Nodes</FormLabel>
        <NumberInput 
          value={params.nodes} 
          onChange={handleNodeChange}
          min={0} 
          max={500}
          inputMode='numeric'
        >
          <NumberInputField
            color='#2D3748' 
            border='1px' 
            borderColor='#2D3748'
            _hover={{
              borderColor: '#8c7dd7'
            }}
            _focus={{
              borderColor: '#8c7dd7'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='#2D3748' />
            <NumberDecrementStepper color='#2D3748' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='#8c7dd7'>0 to 500</FormHelperText>
      </FormControl>
      <FormControl id='prob' isRequired mt={3}>
        <FormLabel color='#2D3748'>Probability of an Edge Between Two Nodes</FormLabel>
        <NumberInput
          value={params.prob}
          onChange={handleProbChange}
          step={0.01}
          min={0} 
          max={1}
          inputMode='decimal'
        >
          <NumberInputField
            color='#2D3748' 
            border='1px' 
            borderColor='#2D3748'
            _hover={{
              borderColor: '#8c7dd7'
            }}
            _focus={{
              borderColor: '#8c7dd7'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='#2D3748' />
            <NumberDecrementStepper color='#2D3748' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='#8c7dd7'>0 to 1</FormHelperText>
      </FormControl>
      <FormControl id='layout' isRequired mt={3}>
        <FormLabel color='#2D3748'>Layout</FormLabel>
        <Select
          name='layout'
          value={params.layout}
          onChange={handleSelectChange}
          color='#2D3748'
          backgroundColor='#f8f8ff'
          border='1px' 
          borderColor='#2D3748'
          _hover={{
            borderColor: '#8c7dd7'
          }}
          _focus={{
            borderColor: '#8c7dd7'
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