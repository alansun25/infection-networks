import React from "react";
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

export default function SmallWorldForm() {
  return (
    <form action="">
      <FormControl id='nodes' isRequired mt={3}>
        <FormLabel color='#2D3748'>Number of Nodes</FormLabel>
        <NumberInput min={0} max={500}>
          <NumberInputField
            color='#2D3748' 
            border='1px' 
            borderColor='#2D3748'
            _hover={{
              borderColor: 'gray.400'
            }}
            _focus={{
              borderColor: 'gray.400'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='#2D3748' />
            <NumberDecrementStepper color='#2D3748' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='gray.500'>0 to 500</FormHelperText>
      </FormControl>
      <FormControl id='nei' isRequired mt={3}>
        <FormLabel color='#2D3748'>Neighborhood</FormLabel>
        <NumberInput min={0} /* Max will be the determined based on state of n (odd or even) */>
          <NumberInputField
            color='#2D3748' 
            border='1px' 
            borderColor='#2D3748'
            _hover={{
              borderColor: 'gray.400'
            }}
            _focus={{
              borderColor: 'gray.400'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='#2D3748' />
            <NumberDecrementStepper color='#2D3748' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='gray.500'>0 to TBD</FormHelperText>
      </FormControl>
      <FormControl id='prob' isRequired mt={3}>
        <FormLabel color='#2D3748'>Rewiring Probability</FormLabel>
        <NumberInput step={0.01} min={0} max={1}>
          <NumberInputField
            color='#2D3748' 
            border='1px' 
            borderColor='#2D3748'
            _hover={{
              borderColor: 'gray.400'
            }}
            _focus={{
              borderColor: 'gray.400'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='#2D3748' />
            <NumberDecrementStepper color='#2D3748' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='gray.500'>0 to 1</FormHelperText>
      </FormControl>
      <FormControl id='layout' isRequired mt={3}>
        <FormLabel color='#2D3748'>Layout</FormLabel>
        <Select
          color='#2D3748'
          backgroundColor='#f8f8ff'
          border='1px' 
          borderColor='#2D3748'
          _hover={{
            borderColor: 'gray.400'
          }}
          _focus={{
            borderColor: 'gray.400'
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