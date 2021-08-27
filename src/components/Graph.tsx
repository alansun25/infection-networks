import React, { useEffect, useRef } from 'react';
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

export default function Graph({ algo, settings }: Props) {
  const graphContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Graph has rendered.')
    algo === 'Random' 
      ? ErdosRenyi(settings.nodes, parseFloat(settings.prob), settings.layout, graphContainer) 
      : WattsStrogatz(settings.nodes, settings.knei, parseFloat(settings.prob), settings.layout, graphContainer)
  }, [algo, settings.nodes, settings.knei, settings.prob, settings.layout]);

  return (
    <Box ref={graphContainer} zIndex='0' h={900}></Box>
  );
}