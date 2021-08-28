import React, { useEffect, useRef } from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

import ErdosRenyi from '../functions/ErdosRenyi';
import WattsStrogatz from '../functions/WattsStrogatz';

type Props = {
  algo: string,
  randSettings: {
    nodes: number,
    prob: string,
    layout: string
  },
  swSettings: {
    nodes: number,
    prob: string,
    knei: number,
    layout: string
  }
};

export default function Graph({ algo, randSettings, swSettings }: Props) {
  const graphContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (randSettings.nodes !== 0 && algo === 'Random') {
      ErdosRenyi(randSettings.nodes, parseFloat(randSettings.prob), randSettings.layout, graphContainer) 
      console.log('Graph has rendered.')
    } else if (swSettings.nodes !== 0 && algo === 'Small-world') {
      WattsStrogatz(swSettings.nodes, swSettings.knei, parseFloat(swSettings.prob), swSettings.layout, graphContainer)
      console.log('Graph has rendered.')
    }
  }, [algo, randSettings.nodes, randSettings.prob, randSettings.layout, swSettings.nodes, swSettings.knei, swSettings.prob, swSettings.layout]);

  return (
    randSettings.nodes === 0 
      ? <Center h={900}>
          <Text color='gray.700' fontSize='3xl'>
            Generate a random graph by editing parameters in the form!
          </Text>
        </Center>
      : <Box ref={graphContainer} zIndex='0' h={900}></Box>
  );
}