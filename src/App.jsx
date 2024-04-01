import "./App.css";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import guitarData from "./data/data";


function App() {
  const [data, setData] = useState(guitarData);
  const [cart, setCart] = useState([]);

  function addToCart(item){
    const exist = cart.findIndex(guitar => guitar.id === item.id);
    if(exist === -1){
      item.quantity = 1;
      setCart((prevCart) => [...prevCart, item])
    }
  }


  return (
    <>
      <Header cart={cart} setCart={setCart}/>

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
