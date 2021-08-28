import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import Graph from './components/Graph';
import Settings from './components/Settings';
import About from './components/About';

function App() {
  const [algo, setAlgo] = useState<string>('Random');

  const [randSettings, setRandSettings] = useState({
    nodes: 0,
    prob: '0',
    layout: 'random'
  });

  const [swSettings, setSwSettings] = useState({
    nodes: 0,
    prob: '0',
    knei: 0,
    layout: 'random'
  });
  
  return (
    <Flex flexDirection='row'>
      <Box h='auto' w='50%'>
        <Settings
          algo={algo}
          setAlgo={setAlgo}
          randSettings={randSettings}
          setRandSettings={setRandSettings}
          swSettings={swSettings}
          setSwSettings={setSwSettings}
          // handleNodeChange={handleNodeChange}
          // handleProbChange={handleProbChange}
          // handleLayoutChange={handleLayoutChange}
        />        
      </Box>
      <Box w='100%'>
        <Graph
          algo={algo}
          randSettings={randSettings}
          swSettings={swSettings}
        />
      </Box>
      <Box pos='fixed' right={0}>
        <About />
      </Box>
    </Flex>
  );
}

export default App;
