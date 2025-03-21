import React from 'react';
import { useCart } from '../contexts/CartContext';

const CheckoutPage = () => {
    const { cartItems, removeFromCart } = useCart();
    console.log(cartItems);

    // Вычисляем общую стоимость корзины
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='container my-5'>
            {/* Заголовок страницы */}
            <h1 className='text-center mb-4'>Оформление заказа</h1>

            {/* Проверка, есть ли товары в корзине */}
            {cartItems.length === 0 ? (
                <p className='text-center'>Ваша корзина пуста.</p>
            ) : (
                <>
                    {/* Список товаров в корзине */}
                    <div className='row'>
                        {cartItems.map((item) => (
                            <div key={item.id} className='col-lg-6 mb-4'>
                                <div className='card shadow-sm'>
                                    <div className='row g-0'>
                                        {/* Изображение товара */}
                                        <div className='col-md-4'>
                                            <img
                                                src={item.product_img}
                                                alt={item.name}
                                                className='img-fluid rounded-start'
                                                style={{ height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>

                                        {/* Информация о товаре */}
                                        <div className='col-md-8'>
                                            <div className='card-body'>
                                                <h5 className='card-title'>{item.name}</h5>
                                                <p className='card-text'>Цена: {item.price} ₽</p>
                                                <p className='card-text'>Количество: {item.quantity}</p>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className='btn btn-danger btn-sm'
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Общая стоимость */}
                    <div className='mt-4'>
                        <h4 className='text-end'>
                            Общая стоимость: <strong>{totalAmount} ₽</strong>
                        </h4>
                    </div>
                    <div className='mt-4 d-flex justify-content-center'>
                        <button className='btn btn-primary'>Оплатить</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CheckoutPage;
