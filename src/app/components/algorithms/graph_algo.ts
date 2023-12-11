type GraphNode = {
  index: number,
  name: string,
  [key: string]: any
}

type GraphEdge = {
  i: number,
  j: number,
  [key: string]: any
}

class Graph {
  nodes: Array<GraphNode>; // node array
  adjList: Array<Array<GraphNode>>; // adjacency List
  adjMatrix: Array<Array<GraphEdge>>; // adjacency Matrix
  noEdge: number; // indicator for no edge
  constructor(inputMatrix: Array<Array<number>> | null = null, nullIndicator: number = 0){
    this.nodes = [];
    this.adjList = [];
    this.adjMatrix = [];
    this.noEdge = nullIndicator;
    if (inputMatrix != null){
      for (let i = 0; i < inputMatrix.length; i++){
        let node: GraphNode = {
          index: i,
          name: i + ''
        }
        this.nodes.push(node);
      }
      for (let i = 0; i < inputMatrix.length; i++){
        this.adjMatrix.push([]);
        this.adjList.push([]);
        for (let j = 0; j < inputMatrix[i].length; j++){
          let edge: GraphEdge = {
            i: i,
            j: j,
            weight: inputMatrix[i][j]
          }
          this.adjMatrix[i].push(edge);
          if (inputMatrix[i][j] != this.noEdge){
            this.adjList[i].push(this.nodes[j]);
          }
        }
      }
    }
  } 
  
  print = (adjMatrix: boolean = true, adjList: boolean = false, edgeList: boolean = false) => {
    console.log("Graph:");
    if (adjMatrix){
      console.log(this.adjMatrix);
    }
    if (adjList){
      for (let i = 0; i < this.adjList.length; i++){
        console.log(this.nodes[i].name, this.adjList[i])
      }
    }
    if (edgeList){
      for (let i = 0; i < this.adjList.length; i++){
        for (let j = 0; j < this.adjList[i].length; j++){
          let pair = [this.nodes[i].name, this.nodes[j].name]
          console.log(pair);
        }
      }
    }
  }
}

export default Graph;
export type {
  GraphNode,
  GraphEdge
}