import React from 'react'
import CartItem from './CartItem'

export default function Cart({cartItems, onUpdateCart}) {

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div>
        <h1>Carrinho</h1>
        {
            cartItems.length === 0 ? (<p>Não há itens no carrinho.</p>) : (
                <>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} />
                ))}
                <div className="total">
                  <p>Total: ${totalPrice}</p>
                </div>
                </>
            )
        }
    </div>
  )
}
