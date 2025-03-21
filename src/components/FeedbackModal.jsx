import React from 'react';

const FeedbackModal = () => {
    return (
        <>
            <div className='text-center mt-4'>
                <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#feedbackModal'>
                    Оставить отзыв
                </button>
            </div>
            <div
                className='modal fade'
                id='feedbackModal'
                tabIndex='-1'
                aria-labelledby='feedbackModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='feedbackModalLabel'>
                                Оставить отзыв
                            </h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                            ></button>
                        </div>
                        <div className='modal-body'>
                            {/* Форма отзыва */}
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor='name' className='form-label'>
                                        Ваше имя
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='name'
                                        placeholder='Введите ваше имя'
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='text' className='form-label'>
                                        Текст отзыва
                                    </label>
                                    <textarea
                                        className='form-control'
                                        id='text'
                                        rows='3'
                                        placeholder='Напишите ваш отзыв'
                                        required
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                                Закрыть
                            </button>
                            <button type='button' className='btn btn-primary'>
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedbackModal;
