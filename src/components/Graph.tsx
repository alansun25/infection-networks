import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

import ErdosRenyi from '../functions/ErdosRenyi';
import WattsStrogatz from '../functions/WattsStrogatz';

export default function Graph() {
  const graphContainer = useRef<HTMLDivElement>(null);
  const [algo, setAlgo] = useState<string>('Random');

  useEffect(() => {
    WattsStrogatz(20, 3, 0.15, "concentric", graphContainer);
  }, []);

  return (
    <Box ref={graphContainer} zIndex='0' h={900}></Box>
  );
}