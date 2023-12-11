"use client";

import React from 'react';
import Canvas from './graph_components/Canvas';
import Graph from './algorithms/graph_algo';

const GraphComponent = () => {
  return (
    <div>
      <Canvas
        width = {100}
        height = {100}
        graph = {new Graph([
          [0,1,1,1],
          [1,0,1,1],
          [1,1,0,1],
          [1,1,1,0]
        ])}
      />
    </div>
  )
}

export default GraphComponent;
