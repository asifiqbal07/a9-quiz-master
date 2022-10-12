import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    const { data } = topics;
    return (
        <div className='mt-16 '>
            <Header></Header>
            <div className='grid grid-cols-4 gap-6'>
                {
                    data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;