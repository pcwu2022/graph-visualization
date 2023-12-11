import React from 'react';

interface CanvasProps {
    width: number,
    height: number
}

const Canvas = ({
  width = 500,
  height = 500
}: CanvasProps) => {
  return (
    <div 
      className = ""
      style={{
          width: width,
          height: height
      }}
    >
      This is the canvas
    </div>
  )
}

export default Canvas;
