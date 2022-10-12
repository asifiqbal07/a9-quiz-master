import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Statistics.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() =>{
axios.get('https://openapi.programming-hero.com/api/quiz')
.then(data => {
    const quizzes = data.data.data;
    const quizData = quizzes.map(quiz =>{
        const quizName = quiz.name;
        const Total = quiz.total;
        const quizTotal = parseInt(Total);
        const mainData = {
            name: quizName,
            total: quizTotal
        }
        return mainData
        
    })
    console.log(quizData);
    setAllData(quizData);
});
    },[])
    return (
        <div className='mt-16 bg-white chart'>
            <h2 className='text-cyan-600 text-2xl font-bold p-2'>Total Quizzes Chart</h2>
            
            <div className='text-white w-50 lg:w-full mt-5 pb-5'>
            <LineChart className='text-white w-1' width={500} height={400} data={allData}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
          <YAxis dataKey="total"/>
            <Tooltip></Tooltip>
            </LineChart>
            </div>
        </div>
    );
};

export default Statistics;