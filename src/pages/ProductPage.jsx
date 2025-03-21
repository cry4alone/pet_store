import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SupabaseContext } from '../contexts/SupabaseContext';
import { useCart } from '../contexts/CartContext';

const ProductPage = () => {
    const { id } = useParams();
    const { products } = useContext(SupabaseContext);
    const { addToCart } = useCart();

    const product = products.find((item) => item.id === Number(id));

    const handleAddToCart = () => {
        addToCart(product);
        alert(`Товар "${product.name}" успешно добавлен в корзину!`);
    };

    if (!product) return <h1 className='text-center my-5'>Product not found</h1>;

    return (
        <div className='container my-5'>
            <h1 className='text-center mb-4'>{product.name}</h1>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <div className='card shadow-lg'>
                        <img
                            src={product.product_img}
                            alt={product.name}
                            className='card-img-top'
                            style={{
                                height: '300px',
                                objectFit: 'cover',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        />
                        <div className='card-body'>
                            <h5 className='card-title text-primary'>Описание:</h5>
                            <p className='card-text'>{product.description}</p>

                            <h5 className='card-title text-success'>Цена:</h5>
                            <p className='card-text h3'>
                                <strong>{product.price} ₽</strong>
                            </p>
                        </div>
                        <div className='card-footer d-flex justify-content-center'>
                            <button onClick={handleAddToCart} className='btn btn-primary'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
