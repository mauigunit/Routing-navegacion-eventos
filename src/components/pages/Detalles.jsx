import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useProductos from '../../hooks/useProductos';


const Detalles = () => {
    const { id } = useParams();
    const { data, loading, error } = useProductos("/informacionData.json");
    if (loading) return <p>Cargando Datos.......</p>

    const buscarProductoId = () => {
      return data.find((producto) => producto.id == id);
    };
    
    const productoEncontrado = buscarProductoId();

  return (
    <>
      <div className="home-container">
                <h1>Detalle Producto</h1>
                <div className="row justify-content-center">
                    {
                        productoEncontrado ? (
                          <>
                            <div key={id} className="card col-md-4" style={{ padding: '0.5rem' }}>
                                <Link to={`/detalle/${productoEncontrado.id}`}>
                                    <img src={productoEncontrado.urlImagen} className="card-img-top" alt={`Imagen ${productoEncontrado.producto}`} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{productoEncontrado.producto}</h5>
                                    <p className="card-text">{productoEncontrado.descripcion_corta}</p>
                                    <center><a href="#" className="btn btn-primary">Agregar al Carrito</a></center>
                                </div>
                            </div>
                            <div className='justify-content-center'>
                            <br />
                            <br />
                            <h3>{productoEncontrado.descripcion_larga}</h3>
                            </div>
                          </>
                        ) : 
                        (
                          <div className='justify-content-center'>
                            <br />
                            <br />
                            <p>Producto no enconcontrado.</p>
                            </div>
                        )
                    }
                </div>
            </div>
    </>
  )
}

export default Detalles
