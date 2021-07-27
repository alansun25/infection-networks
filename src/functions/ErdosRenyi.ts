import cytoscape from "cytoscape";

/*
 * Generates a simple, undirected random graph given n, the number of nodes, and p, 
 * the probability that there is an edge between any two nodes.
 * 
 * The parameter l sets the layout of the outputted network, and ref refers to the 
 * container in which the network visualization will be rendered.
 */

export default function ErdosRenyi(n: number, p: number, l: string, ref: React.MutableRefObject<null>) {
  // This data validation will be changed to be handled before the params are passed
  if (n < 0) {
    alert('A network cannot have a negative number of nodes.');
    return;
  }

  if (p < 0 || p > 1) {
    alert('Probability value must be between 0 and 1 inclusive.');
    return;
  }

  let cy = cytoscape({
    container: ref.current,
    elements: [],
    style: [
      {
        selector: 'node',
        style: {
          'background-color': node => node.data('status') === 'infected' ? 'red' : '#b396f1',
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
    ]
  });

  // Create nodes
  for (let i = 1; i <= n; i++) {
    cy.add({
      group: 'nodes',
      data: { id: `${i}` }
    });
  }

  // Create edges
  for (let i = 1; i <= n; i++) {
    const neighbors = cy.$(`#${i}`).neighborhood();
    for (let j = i; j <= n; j++) {
      const rand = Math.random();
      
       // Prevent self-loops and multiple-edges.
       // Only create the edge if the randomly generated float is less than p.
      if (i !== j && rand < p && !neighbors.contains(cy.$(`#${j}`))) {
        cy.add({
          group: 'edges', 
          data: { id: `${i}-${j}`, source: `${i}`, target: `${j}` }
        })
      }
    }
  }

cy.layout({ name: `${l}` }).run();

  return cy;
}