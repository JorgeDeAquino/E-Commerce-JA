import React from 'react'
import CartItem from './CartItem'
import CheckoutButton from './CheckoutButton'

export default function Cart({ cartItems, onUpdateCart, onRemoveFromCart, onCheckout }) {

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div>
      <h1>Carrinho</h1>
      {
        cartItems.length === 0 ? (<>
          <p>Não há itens no carrinho.</p>
          <CheckoutButton onCheckout={onCheckout} />
        </>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} onRemoveFromCart={onRemoveFromCart} />
            ))}
            <div className="total">
              <p>Total: ${totalPrice}</p>
              <CheckoutButton />
            </div>
          </>
        )
      }
    </div>
  )
}
