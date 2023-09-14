import Image from "next/image"
import objetivo1 from '../Assets/imagenes/Objectives/objetivo11.jpg'
import objetivo2 from '../Assets/imagenes/Objectives/objetivo2.jpg'
import objetivo3 from '../Assets/imagenes/Objectives/objetivo3.jpg'
export function Ourobjetives() {
    return (
        <>
            <div className="nuestros-valores" id="objetivos">
                <h4 className="titulo"><strong>Nuestros Objetivos</strong></h4>
                <div className="line-container-300">
                    <div className="line"></div>
                </div>
                <div className="row">
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card hover">
                                <div className="card-body">
                                    <h5 className="card-title">FOCO en el CORE BUSINESS.</h5>
                                    <p className="card-text">Diseñar un sistema de control de costos para optimizar los recursos. Para ello contamos con nuestro Equipo de Intelligent Business (Analistica Comercial de Gestión).</p>
                                    <Image src={objetivo1} alt="expertos" className="d-block img-fluid" width={450} height={333}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3 mb-sm-0 hover">
                            <div className="card hover">
                                <div className="card-body">
                                    <h5 className="card-title">Optimizar el tiempo y recursos.</h5>
                                    <div className="card-text">
                                        <ul>
                                            <li>Dar soluciones a nuestros clientes de manera ágil y pronta.</li>
                                            <li>Generar confianza y ser altamente fiables.</li>
                                        </ul>
                                    </div>
                                    <Image src={objetivo2} alt="expertos" className="d-block img-fluid" width={450} height={333} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3 mb-sm-0 hover">
                            <div className="card hover">
                                <div className="card-body">
                                    <h5 className="card-title">Generar Valor.</h5>
                                    <p className="card-text"><br />Lograr que las Empresas trabajen con mayor orden y estén preparadas para un excelente crecimiento organizacional.</p> <br />
                                    <Image src={objetivo3} alt="expertos" className="d-block img-fluid" width={450} height={333}/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </>
    )
}