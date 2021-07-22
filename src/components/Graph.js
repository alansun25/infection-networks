import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

export default function Graph() {
  const graphContainer = useRef();
  useEffect(() => {
    cytoscape({
      container: graphContainer.current,
      elements: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'c' } },
        { data: { id: 'd' } },
        { data: { id: 'e' } },
        { data: { id: 'ab', source: 'a', target: 'b' } },
        { data: { id: 'bc', source: 'b', target: 'c' } },
        { data: { id: 'cd', source: 'c', target: 'd' } },
        { data: { id: 'de', source: 'd', target: 'e' } },
        { data: { id: 'ea', source: 'e', target: 'a' } },
      ],
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#b396f1',
            'label': 'data(id)'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'curve-style': 'bezier'
          }
        }
      ],
      layout: {
        name: 'random'
      }
    });
  });

  return (
    <div>
      <div ref={graphContainer} style={{height: '1000px'}}></div>
    </div>
  );
}