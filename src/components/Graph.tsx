import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

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
    console.log('Graph has rendered.')
    algo === 'Random' 
      ? ErdosRenyi(randSettings.nodes, parseFloat(randSettings.prob), randSettings.layout, graphContainer) 
      : WattsStrogatz(swSettings.nodes, swSettings.knei, parseFloat(swSettings.prob), swSettings.layout, graphContainer)
  }, [algo, randSettings.nodes, randSettings.prob, randSettings.layout, swSettings.nodes, swSettings.knei, swSettings.prob, swSettings.layout]);

  return (
    <Box ref={graphContainer} zIndex='0' h={900}></Box>
  );
}