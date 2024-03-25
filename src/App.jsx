import "./App.css";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { useState } from "react";
import guitarData from "./components/data";


function App() {
  const [data, setData] = useState(guitarData);

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((item, index) => {
              return <Guitar item={item} key={index}></Guitar>
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
