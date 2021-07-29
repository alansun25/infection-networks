import cytoscape from "cytoscape";

export const graphStyles = [
  {
    selector: 'node',
    style: {
      'background-color': (node: cytoscape.NodeSingular) => node.data('status') === 'infected' ? '#bc0303' : '#241664',
      'height': 20,
      'width': 20
    }
  },
  {
    selector: 'edge',
    style: {
      'width': 1,
      'line-color': '#241664',
      'curve-style': 'bezier'
    }
  }
];