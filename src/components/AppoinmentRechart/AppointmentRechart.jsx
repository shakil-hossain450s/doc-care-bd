import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const AppointmentRechart = ({ appointedDoctors }) => {
  console.log(appointedDoctors);
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
  };


  return (
    <div onMouseDown={(e) => e.preventDefault()}>
      <BarChart
        style={{ width: '100%', maxHeight: '50vh', aspectRatio: 1.618 }}
        responsive
        data={appointedDoctors}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Bar dataKey="fee" fill="#8884d8" shape={TriangleBar} label={{ position: 'top' }}>
          {appointedDoctors.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default AppointmentRechart;