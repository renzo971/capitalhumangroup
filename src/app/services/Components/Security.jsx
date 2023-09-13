import Image from 'next/image'
import styles from '../page.module.css'
import seguridad from '../images/Services/seguridadseguridadminera-principal.jpg'
export function Security(){
    return(
        <section id="security">
        <div className="nuestros-valores">
            <h4 className="titulo">Seguridad y Salud en el Trabajo</h4>
            <div className="line-container-380">
                <div className="line"></div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                <Image src={seguridad}
                className='img-fluid rounded-start-pill'
                    alt="Seguridad y Salud en el Trabajo" width="850px"/>
                </div>
                <div className="col-md-6">
                <p>
                Contamos con un Equipo de Ingenieros Ambientales e Industriales que conforman
                    el esquema de gestión para ofrecer a nuestros clientes.
                    Contamos con la mejor tecnología para su empresa, además de tener al equipo
                    humano óptimo para evaluar, instalar, realizar los mantenimientos y gestionar
                    nuestros servicios como: cámaras, Closed-circuit televisión, Seguridad electrónica,
                    etc. <br />
                Cooperamos en el alineamiento de sus normas ya establecidas para replicarlas
                    con el personal tercerizado sin que se origine ningún punto que genere
                    contingencia. <br />
                Se propiciara charlas diarias de acuerdo a ley y en coordinación con nuestros
                    clientes. <br />
                Se sugerirá las mejoras en cuanto a Seguridad, si nuestro cliente así lo
                    requiriera.
            </p>
                </div>
            </div>
        </div>
    </section>
    )
}