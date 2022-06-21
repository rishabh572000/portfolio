import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: 'HTML',
      value: 27,
    },
    {
      type: 'CSS',
      value: 25,
    },
    {
      type: 'JavaScript',
      value: 22,
    },
    {
      type: 'React',
      value: 21,
    },
    {
      type: 'AntDesign',
      value: 13,
    },
    {
      type: 'Bootstrap',
      value: 15,
    },
    {
      type: 'Python',
      value: 12,
    },
    {
      type: 'Php',
      value: 10,
    },
    {
      type: 'Mysql',
      value: 9,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
        
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize:20,
          color:'white',
        },
        content: 'My Skill',
      },
    },
  };
  return <Pie {...config} />;
};


export default DemoPie;