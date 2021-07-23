import React, { useState, useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import { Box } from '@chakra-ui/react';

import ErdosRenyi from '../functions/ErdosRenyi';

export default function Graph() {
  const graphContainer = useRef();

  useEffect(() => {
    ErdosRenyi(30, 0.05, graphContainer);
  }, []);

  return (
    <Box pos='relative'>
      <Box pos='fixed' zIndex={1} bg='red' h='100px'>Placeholder</Box>
      <Box ref={graphContainer} h='1000px'></Box>
    </Box>
  );
}