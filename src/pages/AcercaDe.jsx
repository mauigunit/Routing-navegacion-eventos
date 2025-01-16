import React from 'react'

const AcercaDe = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Acerca de Nosotros</h2>

            <section className="mb-5">
                <h3>Misión</h3>
                <p>
                    Nuestra misión es proporcionar a nuestras comunidades productos frescos, de calidad y a precios justos, mientras ofrecemos un excelente servicio al cliente.
                </p>
            </section>

            <section className="mb-5">
                <h3>Visión</h3>
                <p>
                    Nos esforzamos por ser el supermercado de confianza de nuestras comunidades, reconocido por su compromiso con la calidad, sostenibilidad y responsabilidad social.
                </p>
            </section>

            <section className="mb-5">
                <h3>Valores</h3>
                <ul>
                    <li><strong>Calidad:</strong> Solo ofrecemos productos frescos y de alta calidad.</li>
                    <li><strong>Compromiso:</strong> Nos comprometemos con el bienestar de nuestros clientes y empleados.</li>
                    <li><strong>Sostenibilidad:</strong> Trabajamos para minimizar nuestro impacto ambiental.</li>
                </ul>
            </section>

            <section className="mb-5">
                <h3>Compromiso con la Comunidad</h3>
                <p>
                    Nos enorgullece apoyar a nuestra comunidad a través de donaciones de alimentos a organizaciones locales y programas de voluntariado.
                </p>
            </section>

            <section className="mb-5">
                <h3>Compromiso con la Sostenibilidad</h3>
                <p>
                    Nos comprometemos a reducir el uso de plásticos, promover productos locales y orgánicos, y trabajar para ser un supermercado más ecológico.
                </p>
            </section>

            <section className="mb-5">
                <h3>Testimonios</h3>
                <blockquote>
                    <p>"El mejor lugar para hacer la compra de la semana. ¡Siempre encontramos productos frescos y un excelente servicio!"</p>
                    <footer>- Ana López</footer>
                </blockquote>
            </section>

            <section className="mb-5">
                <h3>Galería de Imágenes</h3>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://cooperativaoval.com/images/home/services-02.jpg" className="img-fluid" alt="Supermercado 1" />
                    </div>
                    <div className="col-md-4">
                        <img src="https://img.huffingtonpost.com/asset/5e394457220000420723e589.jpeg" className="img-fluid" alt="Supermercado 2" />
                    </div>
                    <div className="col-md-4">
                        <img src="https://fmdos.cl/wp-content/uploads/2015/10/Compras-de-supermercado.jpeg" className="img-fluid" alt="Supermercado 3" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AcercaDe
