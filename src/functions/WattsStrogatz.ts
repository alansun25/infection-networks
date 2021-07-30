import cytoscape from "cytoscape";
import { RefObject } from "react";
import { graphStyles } from "../styles/graphStyles";

export default function WattsStrogatz(n: number, k: number, p: number, l: string, ref: RefObject<HTMLDivElement>) {
  // TODO: data validation that should be done before params passed in (Look at R implementation for validation steps)

  let cy = cytoscape({
    container: ref.current,
    elements: [],
    style: graphStyles,
    maxZoom: 1
  });

  // Create nodes
  for (let i = 1; i <= n; i++) {
    let status = 'normal'
    if (i % 2 === 0) {
      status = 'infected';
    }

    cy.add({
      group: 'nodes',
      data: { id: `${i}`, status: status }
    });
  }

  // Create edges
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      const h = (j - 1) % n + 1; // Wrap back around the ring when j > n
      const rand = Math.random();

      const ni = cy.nodes().$id(`${i}`);
      const nh = cy.nodes().$id(`${h}`);

      if (rand < p || ni.neighborhood().contains(nh)) {
        let source = [ni, nh][Math.floor(Math.random() * 2)];

        // If either node ni or nh have degree n - 1 (already connected to every other node),
        // make the other node the source by default.
        if (ni.degree(false) === n - 1) {
          source = nh;
        } else if (nh.degree(false) === n - 1) {
          source = ni;
        }

        // By default, randomly select a target node to rewire to.
        const otherNodes = cy.nodes().difference(`#${i}, #${h}`);
        let target = otherNodes.nodes().toArray()[Math.floor(Math.random() * otherNodes.length)];

        if (ni.degree(false) === n - 1 && nh.degree(false) === n - 1) {
          // If both ni and nh are connected to every other node, a loop or multi-edge is unavoidable,
          // so we just choose a purely random node.
          target = cy.nodes().$id(`${Math.floor(Math.random() * n) + 1}`);
        } else {
          const neighbors = source.neighborhood().nodes();

          // If the source has neighbors, choose a target to rewire to such that the target is not
          // one of these neighbors.
          if (!neighbors.empty()) {
            const nonNeighbors = cy.nodes().difference(neighbors);
            target = nonNeighbors.nodes().toArray()[Math.floor(Math.random() * nonNeighbors.length)];
            
            // Prevent loops.
            while (target.same(source)) {
              target = nonNeighbors.nodes().toArray()[Math.floor(Math.random() * nonNeighbors.length)];
            }
          }
        }

        cy.add({
          group: 'edges',
          data: { id: `${source.id()}-${target.id()}`, source: `${source.id()}`, target: `${target.id()}`}
        });
      } else {
        cy.add({
          group: 'edges',
          data: { id: `${ni.id()}-${nh.id()}`, source: `${ni.id()}`, target: `${nh.id()}`}
        });
      }
    }
  }

  cy.layout({ name: `${l}` }).run();
  cy.fit(undefined, 50);

  return cy;
}