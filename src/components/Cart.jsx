import React from 'react'
import CartItem from './CartItem'

export default function Cart({cartItems, onUpdateCart}) {
  return (
    <div>
        <h1>Carrinho</h1>
        {
            cartItems.length === 0 ? (<p>Não há itens no carrinho.</p>) : (
                <>
                {cartItems.map((item) => (
                    <CartItem item={item} onUpdateCart={onUpdateCart} />
                ))}
                </>
            )
        }
    </div>
  )
}
