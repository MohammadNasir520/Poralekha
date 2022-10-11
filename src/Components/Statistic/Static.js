import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import'./Statistic.css'

const Static = () => {
    const loadeddata=useLoaderData();
    const data=loadeddata.data;
    console.log(data)
    return (
     
          
            <BarChart   width={400} height={400} data={data}>
            <Bar dataKey={"total"} fill="#8884d8" ></Bar>
            <XAxis></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            </BarChart>
           
        
    );
};

export default Static;