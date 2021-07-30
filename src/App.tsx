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
        {/* TBD: Move the about section to be a modal... need to put the infection settings here */}
        <About />
      </Box>
      <Box w='100%'>
        <Graph />
      </Box>
    </Flex>
  );
}

export default App;
