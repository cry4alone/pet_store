import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const updateCartItemQuantity = (productId) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId? {...item, quantity: item.quantity + 1 } : item
            )
        );
    }

    const decreaseCartItemQuantity = (productId) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId && item.quantity > 1? {...item, quantity: item.quantity - 1 } : item
            )
        );
    }

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity, decreaseCartItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);