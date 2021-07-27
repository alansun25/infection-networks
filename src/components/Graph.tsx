import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

import ErdosRenyi from '../functions/ErdosRenyi';
import makeRing from '../functions/helper/makeRing';
import WattsStrogatz from '../functions/WattsStrogatz';

export default function Graph() {
  const graphContainer = useRef(null);

  useEffect(() => {
    //makeRing(8, 2, graphContainer);
    //ErdosRenyi(5, 1, "circle", graphContainer)
    WattsStrogatz(10, 2, 0.1, "circle", graphContainer);
  }, []);

  return (
    <Box pos='relative'>
      <Box pos='fixed' zIndex={1} bg='red' h='100px'>Placeholder</Box>
      <Box ref={graphContainer} h='1000px'></Box>
    </Box>
  );
}