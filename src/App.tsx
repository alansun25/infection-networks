import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import Graph from './components/Graph';
import Settings from './components/Settings';
import About from './components/About';

function App() {
  return (
    <Flex flexDirection='row'>
      <Box h='auto' w='50%'>
        <Settings />        
      </Box>
      <Box w='100%'>
        <Graph />
      </Box>
      <Box pos='fixed' right={0}>
        <About />
      </Box>
    </Flex>
  );
}

export default App;
