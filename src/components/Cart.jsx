import React from 'react'

export default function Cart({cartItems}) {
  return (
    <div>
        <h1>Carrinho</h1>
        {
            cartItems.length === 0 ? (<p>Não há itens no carrinho.</p>) : (
                <>
                {cartItems.map((item) => (
                    <p>{item.name}</p>
                ))}
                </>
            )
        }
    </div>
  )
}
