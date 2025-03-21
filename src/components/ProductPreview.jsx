import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPreview = ({ product }) => {
    const navigate = useNavigate();
    const openProduct = () => {
        navigate(`/product/${product.id}`)
    };

    return (
        <div
            onClick={openProduct}
            style={{ cursor: 'pointer' }}
            className='col-6 col-md-4 col-lg-3 p-3 d-flex flex-column align-items-center bg-body m-4 rounded-3 shadow-sm'
        >
            <h5 className='text-center text-wrap'>{product.name}</h5>
            <img src={product.product_img} alt={product.name} className='img-fluid rounded mt-2' />
            <p className='mt-2 mb-0'>Price: {product.price} ₽</p>
        </div>
    );
};

export default ProductPreview;
