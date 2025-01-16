import React from 'react'

const Servicios = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Servicios de Nuestro Supermercado</h2>

            <div className="row">
                {/* Servicio 1: Entrega a Domicilio */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/002/876/981/large_2x/home-delivery-design-concept-online-order-tracking-and-delivery-service-concept-vector.jpg"
                            className="card-img-top"
                            alt="Entrega a domicilio"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Entrega a Domicilio</h5>
                            <p className="card-text">
                                Recibe tus productos cómodamente en casa. ¡Sin salir de tu hogar!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Servicio 2: Compra en Línea */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://transsky.com.ec/wp-content/uploads/2023/08/Compras-en-linea.png"
                            className="card-img-top"
                            alt="Compra en línea"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Compra en Línea</h5>
                            <p className="card-text">
                                Haz tu pedido online y recibe todo lo que necesitas con solo un clic.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Servicio 3: Recogida en Tienda */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://www.bmsupermercados.es/fotografias/noticias/noticia-TOL-recogida-tienda-dic2020-cas.jpg"
                            className="card-img-top"
                            alt="Recogida en tienda"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Recogida en Tienda</h5>
                            <p className="card-text">
                                Compra en línea y recoge tu pedido en nuestra tienda, sin filas ni esperas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                
                {/* Servicio 5: Productos Orgánicos */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://indocal.gob.do/wp-content/uploads/2019/04/FONDO-NORDOM-603-ALIMENTO-ORGANICO.jpg"
                            className="card-img-top"
                            alt="Productos Orgánicos"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Productos Orgánicos</h5>
                            <p className="card-text">
                                Disfruta de una variedad de productos orgánicos y ecológicos, pensados para tu salud y el planeta.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Servicio 6: Asesoría Nutricional */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://www.portalredsalud.cl/wp-content/uploads/2021/08/Estudio-academico-UC-demuestra-el-aporte-de-la-asesoria-nutricional-de-paciente-en-rehabilitacion-cardiaca.jpg"
                            className="card-img-top"
                            alt="Asesoría Nutricional"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Asesoría Nutricional</h5>
                            <p className="card-text">
                                Consulta con nuestros expertos en nutrición para una alimentación más saludable.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Servicio 8: Atención al Cliente */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://www.ecommercenews.pe/wp-content/uploads/2022/01/atencion-al-cliente.png"
                            className="card-img-top"
                            alt="Atención al Cliente"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Atención al Cliente</h5>
                            <p className="card-text">
                                Estamos aquí para ayudarte. Contacta con nuestro servicio de atención al cliente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Servicios
