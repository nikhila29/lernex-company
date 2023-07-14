import React from "react";
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import '../App.css';
  
  
export const Donutchart = () => {
  
// Sample data
const data = [
  { argument:'A', value:10 },
  { argument:'B', value:10 },
  { argument:'C', value:10 },
  { argument:'D', value:10 },
  { argument:'E', value:10 },
  { argument:'F', value:10 },
  { argument:'G', value:10 },
  { argument:'H', value:10 },
  { argument:'I', value:10 },
  { argument:'J', value:10 },
];
return (
    
    <Chart
      data={data}
      type="donut"
      width={200}
      height={ 200}
    >
      <PieSeries valueField="value" 
        argumentField="argument" 
        innerRadius={0.6} 
        />
      <Title text="Wheel Of Opportunities" />
    </Chart>
  
);
}