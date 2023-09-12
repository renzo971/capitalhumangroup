import Image from "next/image"
import mision from '../Assets/imagenes/MisionVision/mision-de-una-empresa.jpg'
import vision from '../Assets/imagenes/MisionVision/retinal-biometrics-technology-with-man-s-eye-digital-remix.jpg'
export function MisionVision() {
    return (
        <>
            <div className=" m-4 row">
                <div className="col-sm-6 mb-3 mb-sm-0 nuestros-valores">
                    <div className="card mb-3 hover" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={mision} className="img-fluid rounded-start" alt="Mision" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Visión</h5>
                                    <div className="line-container-300">
                                        <div className="line"></div>
                                    </div>
                                    <p className="card-text">Ser Líderes en servicios e Innovación en Recursos Humanos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 nuestros-valores">
                    <div className="card mb-3 hover" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src={vision} className="img-fluid rounded-start" alt="Vision" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Misión</h5>
                                    <div className="line-container-300">
                                        <div className="line"></div>
                                    </div>
                                    <p className="card-text">Dar soluciones efectivas, optimizando los recursos de nuestros clientes e incrementando sus ingresos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}