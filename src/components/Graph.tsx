import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

import ErdosRenyi from '../functions/ErdosRenyi';
import makeRing from '../functions/helper/makeRing';
import WattsStrogatz from '../functions/WattsStrogatz';

export default function Graph() {
  const graphContainer = useRef(null);

  useEffect(() => {
    //console.log(makeRing(10, 2, graphContainer).edges().length);
    //ErdosRenyi(5, 1, "circle", graphContainer)
    WattsStrogatz(50, 5, 0.05, "random", graphContainer);
  }, []);

  return (
    <Box pos='relative'>
      <Box pos='fixed' zIndex={1} bg='red' h='100px'>Placeholder</Box>
      <Box ref={graphContainer} h='1000px'></Box>
    </Box>
  );
}