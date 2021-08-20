import cytoscape from "cytoscape";

export const graphStyles = [
  {
    selector: 'node',
    style: {
      'background-color': (node: cytoscape.NodeSingular) => node.data('status') === 'infected' ? '#E53E3E' : '#b6b6b6',
      'height': 20,
      'width': 20
    }
  },
  {
    selector: 'edge',
    style: {
      'width': 0.5,
      'line-color': '#a5a5a5',
      'curve-style': 'bezier'
    }
  }
];