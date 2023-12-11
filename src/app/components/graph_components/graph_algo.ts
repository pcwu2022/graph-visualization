type GraphNode = {
  index: number,
  name?: string,
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
          index: i
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
    if (adjMatrix){
      console.log(this.adjMatrix);
    }
    if (adjList || edgeList){
      for (let i = 0; i < this.adjList.length; i++){
        if (adjList){
          console.log(('name' in this.nodes[i]) ? this.nodes[i].name : i, this.adjList[i])
        }
        if (edgeList){
          for (let j = 0; j < this.adjList[i].length; j++){
            let pair = [('name' in this.nodes[i]) ? this.nodes[i].name : i, ('name' in this.nodes[j]) ? this.nodes[j].name : j]
            console.log(pair);
          }
        }
      }
    }
  }
}