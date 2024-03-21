// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(item => {
        total += item.price * item.quantity
      })

      return (
        <>
          <h1>Order Total: Rs {total} /- </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button">Checkout</button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
