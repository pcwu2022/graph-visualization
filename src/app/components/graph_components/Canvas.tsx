"use client";

import React, { useEffect, useState } from 'react';
import Graph from '../algorithms/graph_algo';
import CanvasNode from './CanvasNode';

interface CanvasProps {
    width: number,
    height: number,
    graph: Graph
}

const Canvas = ({
  width = 500,
  height = 500,
  graph = new Graph()
}: CanvasProps) => {
  const [graphState, setGraphState] = useState<Graph>(graph);
  return (
    <div 
      className = "relative"
      style={{
          width: width,
          height: height
      }}
    >
      {
        graphState.nodes.map((node) => (
          <CanvasNode 
            label = {node.index}
            x = {node.index*20}
            y = {0}
            radius={10}
          />
        ))
      }
    </div>
  )
}

export default Canvas;
