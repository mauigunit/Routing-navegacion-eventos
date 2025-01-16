import React from 'react'

const Contacto = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Formulario de Contacto</h1>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form className="border border-secondary p-4 rounded">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" id="nombre" name="nombre" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input type="email" id="email" name="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" className="form-control" rows="4" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto
