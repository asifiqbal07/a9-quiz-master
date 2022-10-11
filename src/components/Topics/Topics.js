import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics= useLoaderData();
    const {data} = topics;
    console.log(topics);
    return (
        <div className='mt-40 grid grid-cols-4 gap-6'>
            {
               data.map(topic => <Topic
               key = {topic.id}
               topic = {topic}
               ></Topic>)
            }
        </div>
    );
};

export default Topics;