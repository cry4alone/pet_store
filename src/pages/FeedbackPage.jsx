import React from 'react';
import FeedbackCard from '../components/FeedbackCard';

import FeedbackModal from '../components/FeedbackModal';
const feedbacks = [
    {
        name: 'Анна',
        text: 'Отличный магазин! Все товары высокого качества.',
        date: '2023-10-01',
    },
    {
        name: 'Анна',
        text: 'Отличный магазин! Все товары высокого качества.',
        date: '2023-10-01',
    },
    {
        name: 'Анна',
        text: 'Отличный магазин! Все товары высокого качества.',
        date: '2023-10-01',
    },
    {
        name: 'Анна',
        text: 'Отличный магазин! Все товары высокого качества.',
        date: '2023-10-01',
    },
];

const FeedbackPage = () => {
    return (
        <>
            <div className='container mt-5'>
                <h1 className='text-center mb-4'>Отзывы</h1>
                <div className='row'>
                    {feedbacks.map((feedback) => {
                        return <FeedbackCard key={feedback.date} feedback={feedback} />;
                    })}
                </div>
            </div>
            <FeedbackModal></FeedbackModal>
        </>
    );
};

export default FeedbackPage;
