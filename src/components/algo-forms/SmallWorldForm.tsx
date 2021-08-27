import React from "react";
import {
  FormControl,
  FormLabel,
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
    <form>
      <FormControl id='nodes' isRequired mt={3}>
        <FormLabel color='gray.700'>Number of Nodes</FormLabel>
        <NumberInput min={0} max={500}>
          <NumberInputField
            color='gray.700' 
            border='1px' 
            borderColor='gray.700'
            _hover={{
              borderColor: 'gray.400'
            }}
            _focus={{
              borderColor: 'gray.400'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='gray.700' />
            <NumberDecrementStepper color='gray.700' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='gray.500'>0 to 500</FormHelperText>
      </FormControl>
      <FormControl id='nei' isRequired mt={3}>
        <FormLabel color='gray.700'>Neighborhood</FormLabel>
        <NumberInput min={0} /* Max will be the determined based on state of n (odd or even) */>
          <NumberInputField
            color='gray.700' 
            border='1px' 
            borderColor='gray.700'
            _hover={{
              borderColor: 'gray.400'
            }}
            _focus={{
              borderColor: 'gray.400'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='gray.700' />
            <NumberDecrementStepper color='gray.700' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='gray.500'>0 to TBD</FormHelperText>
      </FormControl>
      <FormControl id='prob' isRequired mt={3}>
        <FormLabel color='gray.700'>Rewiring Probability</FormLabel>
        <NumberInput step={0.01} min={0} max={1}>
          <NumberInputField
            color='gray.700' 
            border='1px' 
            borderColor='gray.700'
            _hover={{
              borderColor: 'gray.400'
            }}
            _focus={{
              borderColor: 'gray.400'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='gray.700' />
            <NumberDecrementStepper color='gray.700' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='gray.500'>0 to 1</FormHelperText>
      </FormControl>
      <FormControl id='layout' isRequired mt={3}>
        <FormLabel color='gray.700'>Layout</FormLabel>
        <Select
          color='gray.700'
          backgroundColor='#f8f8ff'
          border='1px' 
          borderColor='gray.700'
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