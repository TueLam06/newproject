import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const total = cart.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    function addToCart(product) {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (!existingProduct) setCart([...cart, { ...product, quantity: 1 }])
        else increaseQuantity(product)
    }

    function increaseQuantity(product) {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart(
                cart.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
            )
        } else {
            addToCart(product)
        }
    }

    function decreaseQuantity(product) {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct && existingProduct.quantity > 1) {
            setCart(
                cart.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            )
        } else if (existingProduct && existingProduct.quantity === 1) {
            return removeFromCart(existingProduct)
        }
    }

    function removeFromCart(product) {
        setCart(
            cart.filter((item) => {
                return item.id !== product.id
            })
        )
    }

    const value = {
        cart,
        total,
        cartCount,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}