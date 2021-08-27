import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import Graph from './components/Graph';
import Settings from './components/Settings';
import About from './components/About';

function App() {
  const [algo, setAlgo] = useState<string>('Random');
  const [settings, setSettings] = useState({
    nodes: 0,
    prob: '0',
    knei: 0,
    layout: 'random'
  });

  // const handleNodeChange = (valStr: string, valNum: number) => {
  //   if (isNaN(valNum)) {
  //     valNum = 0;
  //   }

  //   setSettings({
  //     ...settings,
  //     nodes: valNum
  //   })
  // };

  // const handleProbChange = (valStr: string, valNum: number) => {
  //   setSettings({
  //     ...settings,
  //     prob: valStr
  //   })
  // };

  // const handleLayoutChange = (valStr: string, valNum: number) => {
  //   setSettings({
  //     ...settings,
  //     layout: valStr
  //   })
  // };
  
  return (
    <Flex flexDirection='row'>
      <Box h='auto' w='50%'>
        <Settings
          algo={algo}
          setAlgo={setAlgo}
          settings={settings}
          setSettings={setSettings}
          // handleNodeChange={handleNodeChange}
          // handleProbChange={handleProbChange}
          // handleLayoutChange={handleLayoutChange}
        />        
      </Box>
      <Box w='100%'>
        <Graph
          algo={algo}
          settings={settings}
        />
      </Box>
      <Box pos='fixed' right={0}>
        <About />
      </Box>
    </Flex>
  );
}

export default App;
