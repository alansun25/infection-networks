import cytoscape from "cytoscape";

export const graphStyles = [
  {
    selector: 'node',
    style: {
      'background-color': (node: cytoscape.NodeSingular) => node.data('status') === 'infected' ? '#d55757' : '#8c7dd7',
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