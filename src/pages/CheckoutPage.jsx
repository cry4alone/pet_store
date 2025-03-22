import React from 'react';
import { useCart } from '../contexts/CartContext';
import Cart from '../components/Cart';

const CheckoutPage = () => {
    const { cartItems } = useCart();
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='container my-5'>
            <h1 className='text-center mb-4'>Оформление заказа</h1>

            {cartItems.length === 0 ? (
                <p className='text-center'>Ваша корзина пуста.</p>
            ) : (
                <>
                    <Cart></Cart>
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
