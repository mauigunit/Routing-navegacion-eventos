import React from 'react'
import useProductos from '../hooks/useProductos';
import { Link } from 'react-router-dom';

const Home = () => {
    const { data, loading, error } = useProductos("/informacionData.json");
    if (loading) return <p>Cargando Datos.......</p>
    return (
        <>
            <div className="home-container">
                <h1>Nuestros Productos</h1>
                <div className="row">
                    {
                        data.map((producto) => (
                            <div key={producto.id} className="card" style={{ width: '18rem', margin: '1rem', padding: '0.5rem', border: '2px solid #ccc' }}>
                                <Link to={`/detalle/${producto.id}`}>
                                    <img src={producto.urlImagen} className="card-img-top" alt={`Imagen ${producto.producto}`} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{producto.producto}</h5>
                                    <p className="card-text">{producto.descripcion_corta}</p>
                                    <center><a href="#" className="btn btn-primary">Agregar al Carrito</a></center>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home