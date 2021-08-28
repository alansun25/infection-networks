import cytoscape from "cytoscape";
import { RefObject } from "react";
import { graphStyles } from "../styles/graphStyles";

/*
 * Generates a simple, undirected random graph given n, the number of nodes, and p, 
 * the probability that there is an edge between any two nodes.
 * 
 * The parameter l sets the layout of the outputted network, and ref refers to the 
 * container in which the network visualization will be rendered.
 */

export default function ErdosRenyi(n: number, p: number, l: string, ref: RefObject<HTMLDivElement>) {
  // TODO: To handle the issue of the graph re-rendering whenever a tab is visited again, considering creating
  // the cy object in the Graph component, then pass it into here to populate and save it in state of the Graph
  // component. May need to declare seperate cy objects in Graph for each different algorithm. There has to be
  // a way to assign the container ref to the cy object after it is created, right?
  let cy = cytoscape({
    container: ref.current,
    elements: [],
    style: graphStyles
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
    for (let j = i; j <= n; j++) {
      
      /* 
       * This condition prevents self-loops and multiple-edges by only considering the addition
       * of edges that have not already been considered. This is done because we are creating
       * an undirected graph, so we only need to consider edge i-j once; we don't need to consider
       * both i->j and j->i 
       */
      if (i < j) {
        const rand = Math.random();
        
        // Only create the edge if the randomly generated float is less than p.
        if (rand < p) {
          cy.add({
            group: 'edges', 
            data: { id: `${i}-${j}`, source: `${i}`, target: `${j}` }
          })
        }
      }
    }
  }

  cy.layout({ name: `${l}` }).run();
  cy.fit(undefined, 50);

  return cy;
}