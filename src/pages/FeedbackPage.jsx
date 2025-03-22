import React from 'react';
import FeedbackCard from '../components/FeedbackCard';

import FeedbackModal from '../components/FeedbackModal';
const feedbacks = [
    {
        name: 'Мария',
        text: 'Заказала корм для кошки, доставили быстро, качество отличное!',
        date: '2023-09-28',
    },
    {
        name: 'Иван',
        text: 'Покупал аквариум, все пришло в идеальном состоянии. Спасибо!',
        date: '2023-09-30',
    },
    {
        name: 'Екатерина',
        text: 'Игрушки для собак очень понравились моему псу, он в восторге!',
        date: '2023-10-02',
    },
    {
        name: 'Алексей',
        text: 'Отличный выбор товаров для питомцев. Цены радуют!',
        date: '2023-10-03',
    },
    {
        name: 'Ольга',
        text: 'Заказала поводок и ошейник, все качественно и стильное. Рекомендую!',
        date: '2023-10-04',
    },
    {
        name: 'Дмитрий',
        text: 'Спасибо за быструю доставку и приятное обслуживание!',
        date: '2023-10-05',
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
