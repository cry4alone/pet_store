import React from 'react';

const FeedbackCard = ({feedback}) => {
    return (
        <div className='col-md-6 col-lg-4 mb-4'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>{feedback.name}</h5>
                    <p className='card-text'>{feedback.text}</p>
                    <small className='text-muted'>{feedback.date}</small>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
