import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

import ErdosRenyi from '../functions/ErdosRenyi';
import WattsStrogatz from '../functions/WattsStrogatz';
import AlgoSelect from './AlgoSelect';

export default function Graph() {
  const graphContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WattsStrogatz(50, 5, 0.15, "breadthfirst", graphContainer);
  }, []);

  return (
    <Box>
      <AlgoSelect />
      <Box ref={graphContainer} zIndex='0' h='900'></Box>
    </Box>
  );
}