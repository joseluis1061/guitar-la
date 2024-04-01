import "./App.css";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import guitarData from "./data/data";


function App() {

  const initialCart = () => {
    const cartStorage = localStorage.getItem('cart');
    return cartStorage? JSON.parse(cartStorage) : [];
  }
  const [data, setData] = useState(guitarData);
  const [cart, setCart] = useState(initialCart);
  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  function addToCart(item){
    const itemExist = cart.findIndex(guitar => guitar.id === item.id);
    if(itemExist === -1){
      item.quantity = 1;
      setCart((prevCart) => [...prevCart, item])
    }else{
      if(cart[itemExist].quantity >= MAX_ITEMS) return;
      const updateCart = [...cart];
      updateCart[itemExist].quantity +=1;
      setCart(updateCart); 
    }
  }

  function removefromCart(id){
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
  }

  function incrementQuantity(id){
    const updateQuantity = cart.map(item => {
      if(item.id === id && item.quantity < MAX_ITEMS){
        console.log(item.quantity)
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updateQuantity);
  }

  function decrementQuantity(id){
    const updateQuantity = cart.map(item => {
      if(item.id === id && item.quantity > MIN_ITEMS){
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updateQuantity);
  }


  return (
    <>
      <Header 
        cart = {cart} 
        setCart = {setCart}
        removefromCart = {removefromCart}
        incrementQuantity = {incrementQuantity}
        decrementQuantity = {decrementQuantity}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((guitar) => {
              return <Guitar  key={guitar.id} guitar={guitar} addToCart={addToCart} ></Guitar>
            })
          }
          
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
