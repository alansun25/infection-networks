import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

import ErdosRenyi from '../functions/ErdosRenyi';
import WattsStrogatz from '../functions/WattsStrogatz';

type Props = {
  algo: string,
  settings: {
    nodes: number,
    prob: string,
    knei: number,
    layout: string
  }
};

export default function Graph({ algo, settings}: Props) {
  const graphContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    algo === 'random' 
      ? ErdosRenyi(settings.nodes, parseFloat(settings.prob), settings.layout, graphContainer) 
      : WattsStrogatz(settings.nodes, settings.knei, parseFloat(settings.prob), settings.layout, graphContainer)
  }, []);

  return (
    <Box ref={graphContainer} zIndex='0' h={900}></Box>
  );
}