import Matter from 'matter-js';
import React from 'react';
import { View } from 'react-native';

const Floor = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;
  const borderRadius = 20;

  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: borderRadius,
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world, color, pos, size) => {
const initialFloor = Matter.Bodies.rectangle(
pos.x,
pos.y,
size.width,
size.height,
{
label: 'Floor',
isStatic: true,
render: {
fillStyle: color,
strokeStyle: '#000000',
lineWidth: 2
}
}
)
Matter.World.add(world, initialFloor)

return {
body: initialFloor,
color,
pos,
renderer: <Floor color={color}/>
  };
};
