import cytoscape from "cytoscape";

export default function WattsStrogatz(n, k, p, l, ref) {
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
    for (let j = i + 1; j <= i + k; j++) {
      j = (j - 1) % n + 1;
      const rand = Math.random();

      const ni = cy.nodes().$id(`${i}`);
      const nj = cy.nodes().$id(`${j}`);

      if (rand < p || ni.neighborhood().contains(nj)) {
        let source = [ni, nj][Math.floor(Math.random() * 2)];

        if (ni.degree() === n - 1) {
          source = ni;
        } else if (nj.degree() === n - 1) {
          source = nj;
        }

        let target = cy.nodes().$id(`${Math.ceil(Math.random() * n)}`);

        if (ni.degree() === n - 1 && nj.degree() === n - 1) {
          /* Do nothing */
        } else {
          const neighbors = source.neighborhood();
          if (neighbors.length > 0) {
            const nonNeighbors = cy.nodes().filter(node => !neighbors.nodes().contains(node));
            target = nonNeighbors.nodes().$id(`${Math.ceil(Math.random() * nonNeighbors.length)}`);
            while (target.same(source)) {
              target = nonNeighbors.nodes().$id(`${Math.ceil(Math.random() * nonNeighbors.length)}`);
            }
          } else {
            const otherNodes = cy.nodes().filter(node => !node.same(ni) && !node.same(nj));
            target = otherNodes.nodes().$id(`${Math.ceil(Math.random() * otherNodes.length)}`);
          }
        }

        cy.add({
          group: 'edges',
          data: { id: `${source.id()}-${target.id()}`, source: `${source.id()}`, target: `${target.id()}`}
        });
      } else {
        cy.add({
          group: 'edges',
          data: { id: `${ni.id()}-${nj.id()}`, source: `${ni.id()}`, target: `${nj.id()}`}
        });
      }
    }
  }

  cy.layout({ name: `${l}` }).run();

  return cy;
}