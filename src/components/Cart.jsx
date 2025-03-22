import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateCartItemQuantity, decreaseCartItemQuantity } = useCart();

    return (
        <div className='row'>
            {cartItems.map((item) => (
                <div key={item.id} className='col-lg-6 mb-4'>
                    <div className='card shadow-sm'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <img
                                    src={item.product_img}
                                    alt={item.name}
                                    className='img-fluid rounded-start'
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p className='card-text'>Цена: {item.price} ₽</p>
                                    <p className='card-text'>Количество: {item.quantity}</p>
                                    <button onClick={() => removeFromCart(item.id)} className='btn btn-danger btn-sm'>
                                        Удалить
                                    </button>
                                    <button className='btn' onClick={() => updateCartItemQuantity(item.id)}>
                                        <i class='bi bi-plus'></i>
                                    </button>
                                    <button onClick={() => decreaseCartItemQuantity(item.id)} className='btn'>
                                        <i class='bi bi-dash'></i>{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
