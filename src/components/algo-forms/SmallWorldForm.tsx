import React, { ChangeEvent, useState } from "react"
import {
  Button,
  Flex,
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

type Props = {
  swSettings: {
    nodes: number,
    prob: string,
    knei: number,
    layout: string,
  }
  setSwSettings: React.Dispatch<React.SetStateAction<{
    nodes: number,
    prob: string,
    knei: number,
    layout: string,
  }>>
};

export default function SmallWorldForm({ swSettings, setSwSettings }: Props) {
  const [params, setParams] = useState({
    nodes: 0,
    prob: '0',
    knei: 0,
    layout: 'random'
  });

  const localHandleNodes = (valStr: string, valNum: number) => {
    if (isNaN(valNum)) {
      valNum = 0;
    }

    setParams({
      ...params,
      nodes: valNum
    })
  };

  const localHandleProb = (valStr: string, valNum: number) => {
    setParams({
      ...params,
      prob: valStr
    })
  };

  const localHandleKnei = (valStr: string, valNum: number) => {
    if (isNaN(valNum)) {
      valNum = 0;
    }

    setParams({
      ...params,
      knei: valNum
    })
  };

  const localHandleLayout = (e: ChangeEvent<HTMLSelectElement>) => {
    setParams({
      ...params,
      layout: e.target.value
    })
  };

  const handleSubmit = (n: number, p: string, k: number, l: string) => {
    setSwSettings({
      ...swSettings,
      nodes: n,
      prob: p,
      knei: k,
      layout: l
    });
  };

  return (
    <form>
      <FormControl id='nodes' isRequired mt={3}>
        <FormLabel color='gray.700'>Number of Nodes</FormLabel>
        <NumberInput
          value={params.nodes} 
          onChange={localHandleNodes}
          min={0} 
          max={200}
          inputMode='numeric'
        >
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
        <FormHelperText color='gray.500'>0 to 200</FormHelperText>
      </FormControl>
      <FormControl id='nei' isRequired mt={3}>
        <FormLabel color='gray.700'>Neighborhood</FormLabel>
        <NumberInput
          value={params.knei}
          onChange={localHandleKnei}
          min={0}
          max={params.nodes % 2 === 0 ? params.nodes / 2 : Math.floor(params.nodes / 2)}
          inputMode='numeric'
        >
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
        <FormHelperText color='gray.500'>
          0 to {params.nodes % 2 === 0 ? `${params.nodes / 2}` : `${Math.floor(params.nodes / 2)}`}
        </FormHelperText>
      </FormControl>
      <FormControl id='prob' isRequired mt={3}>
        <FormLabel color='gray.700'>Rewiring Probability</FormLabel>
        <NumberInput
          value={params.prob}
          onChange={localHandleProb}
          step={0.01} 
          min={0} 
          max={1}
          inputMode='decimal'
        >
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
          value={params.layout}
          onChange={localHandleLayout}
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
      <Flex justify='end'>
        <Button
          mt={6}
          mb={4}
          color="#f8f8ff"
          bgColor="gray.700"
          fontWeight="normal"
          _hover={{ bg: 'gray.600' }}
          _active={{ bg: 'gray.800' }}
          type="button"
          onClick={() => handleSubmit(params.nodes, params.prob, params.knei, params.layout)}
        >
          Generate
        </Button>
      </Flex>
    </form>
  );
};