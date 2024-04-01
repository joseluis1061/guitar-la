import { useEffect, useMemo, useState } from "react";

const Header = ({ cart, setCart, removefromCart, incrementQuantity, decrementQuantity }) => {

  //Derivate state
  const isCartEmpty = useMemo(() => cart.length > 0, [cart]);
  const total = useMemo(() => cart.reduce((acumulator, item)=> acumulator + (item.quantity*item.price), 0), [cart]);  

  function addToCart(counter, index){
    const updateCart = [...cart];
    if(counter === -1 && updateCart[index].quantity !== 1){
      updateCart[index].quantity += -1;
      setCart(updateCart);
    }else if(counter === 1){
      updateCart[index].quantity += counter;
      setCart(updateCart);
    }
  }

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {
                  isCartEmpty? (
                    <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                    
                      {
                        cart.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <img
                                  className="img-fluid"
                                  src={`./img/${item.image}.jpg`}
                                  alt="imagen guitarra"
                                />
                              </td>
                              <td>{item.name}</td>
                              <td className="fw-bold">${item.price}</td>
                              <td className="flex align-items-start gap-4">
                                <button type="button" className="btn btn-dark" onClick={() => decrementQuantity(item.id)}>
                                  -
                                </button>
                                {item.quantity}
                                <button type="button" className="btn btn-dark" onClick={() => incrementQuantity(item.id)}>
                                  +
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-danger" type="button" onClick={() => removefromCart(item.id)}>
                                  X
                                </button>
                              </td>
                            </tr>
                          )
                        }
                          
                        )
                      }
                      
                  </tbody>
                </table>
                <p className="text-end">
                  Total pagar: <span className="fw-bold">${total}</span>
                </p>
                </>
                  ) : (<p className="text-center">El carrito esta vacio</p>)
                }
                <button className="btn btn-dark w-100 mt-3 p-2" onClick={()=> setCart([])}>
                  Vaciar Carrito
                </button>
                

                

                
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
