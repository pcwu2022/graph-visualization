"use client";

import { rgb } from '@/app/types';
import React from 'react';

interface NodeProps {
  label: number | string,
  x: number,
  y: number,
  radius?: number,
  background?: rgb,
  color?: rgb
  border?: rgb
}

const CanvasNode = ({
  label = "",
  x = 0,
  y = 0,
  radius = 10,
  background = [255,255,255],
  border = [0,0,0],
  color = [0,0,0]
}: NodeProps) => {
  return (
    <>
      <div
        className=''
        style={{
          position: 'absolute',
          top: x + 'px',
          left: y + 'px',
          width: radius/2 + 'px',
          height: radius/2 + 'px',
          color: `rgb(${color[0]},${color[1]},${color[2]})`,
          backgroundColor: `rgb(${background[0]},${background[1]},${background[2]})`,
          border: `2px solid rgb(${border[0]},${border[1]},${border[2]})`,
          borderRadius: '100%'
        }}
      >
        { label }
      </div>
    </>
  )
}

export default CanvasNode;
