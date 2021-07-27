import cytoscape from 'cytoscape';

export default function makeRing(n, k, ref) {

  // TODO: data validation (should be done before params passed in)

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
  for (let i = 1; i <= k; i++) {
    cy.nodes().forEach(node => {
      const source = node.id();
      const target = (parseInt(source) + i - 1) % n + 1 // Wraps around if the id value exceeds n
      cy.add({
        group: 'edges', data: { id: `${source}-${target}`, source: `${source}`, target: `${target}`}
      })
    });
  }

  console.log(cy.nodes('[id: "1"]').id())

  cy.layout({ name: 'circle' }).run();

  return cy;
}