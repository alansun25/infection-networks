import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

function App() {
  const container = useRef();
  useEffect(() => {
    cytoscape({
      container: container.current,
      elements: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'ab', source: 'a', target: 'b' } },
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
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        }
      ],
      layout: {
        name: 'grid',
        rows: 1
      }
    });
  });

  return (
    <div>
      <h1>Cytoscape Test</h1>
      <div ref={container} style={{height: '1000px'}}></div>
    </div>
  );
}

export default App;
