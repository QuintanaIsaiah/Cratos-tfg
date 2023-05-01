import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link} from "react-router-dom";



const Productos = () => {
  const [productos, setProductos] = useState({
    lista: [],
  });

  //Indicamos que ejecute getProductos una vez
  useEffect(() => {
    getProductos();
  }, []);

  //Creamos una funcion para recoger la info desde el php y lo guardamos en lista []
  function getProductos() {
    axios
      .get("http://localhost/Cratos-backend/productos.php")
      .then(function (resultado) {
        // console.log(resultado);
        setProductos({ lista: resultado.data });
      });
  }

  //Creamos una funcion para que actualizar los datos , llamando de nuevo a getProductos
  function actualizarProductos() {
    getProductos();
  }

  //Creamos función para añadir productos recibiendo su id por parametro (onclick={()=>añadir(lista[0])})
  function añadirProducto(id) {
    axios
      .post("http://localhost/Cratos-backend/a%C3%B1adirAcarro.php", id)
      .then(function (resultado) {
        // console.log(resultado.data);

        if (resultado.data === 1) {
          alert("Producto añadido al carro");
        } else {
          alert("No se ha podido añadir el producto al carro");
        }
      });
  }


  //Creamos constante donde almacene la imagenes en una variable 
  const productosImg = require.context("../img",true);

  

 //Prueba para ruta a Detalle.jsx: <Link to={`/Detalle/${listado[0]}`} className="ver-btn"></Link>

  return (
    <div>
      <h2 onClick={actualizarProductos}>Todos los productos</h2>

      <div className="contenedor_producto">
        {productos.lista.map((listado, key) => (
          <div className="div_producto" key={key}>
            <div className="p_titulo">
              <h3>{listado[1]}</h3>
            </div>

            <div className="p_img">
              {listado[1] && productosImg.keys().includes(`./${listado[1]}.jpg`) ? (
                <img className="p_img_size" src={productosImg(`./${listado[1]}.jpg`)} alt="Producto" />
              ) : (
                <p>Imagen no encontrada</p>
              )}
            </div>

            <div id="prueba" className="p_descripcion">
              {listado[3]}
            </div>
            <div className="p_precio">Precio : {listado[4] + "€"}</div>
            <ul className="p_botones">
              <li>cat: {listado[2]}</li>
              <li>
                <input
                  type="button"
                  id="añadir"
                  name="añadir"
                  value="AÑADIR AL CARRO"
                  onClick={() => añadirProducto(listado[0])}
                ></input>
              </li>
              <li>
                <Link to={"/Detalle"} className="ver-btn">
                  <button type="button" id="ver" name="ver">VER</button>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
