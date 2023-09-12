import Link from 'next/link'
import Image from 'next/image'
import logo from '../Assets/imagenes/Logo/logosoloCHG.png'
export function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Image src={logo} alt="expertos" className="img-fluid" width={40} height={40} />
                <Link className="navbar-brand" href="/"><span className="degradado">
                    <strong>CAPITAL HUMAN </strong></span> <span
                        className="group"><strong>GROUP</strong> </span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto p-3">
                        <li className="nav-item ancor">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <Link className="nav-link highlight-link" href="/">Inicio</Link>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item dropdown ancor">
                            <a className="nav-link highlight-link dropdown-toggle" href="#hola" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Empresa
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item highlight-list" href="#quienessomos"> ¿Quiénes somos?</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="#visionmision"> Visión y misión</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="#objetivos"> Nuestros objetivos</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="#cobertura"> Cobertura Nacional</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="#convenios"> Convenios Corporativos</a>
                                </li>
                            </ul>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item dropdown ancor">
                            <a className="nav-link highlight-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Nuestros Servicios
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a id="servicios-link" className="dropdown-item highlight-list" href="/servicios#outsourcing">
                                        Outsourcing y
                                        Consultoría en Gestión Humana</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="/nuestrosservicios/#trademarketing"> Trade
                                        Marketing</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="/nuestrosservicios/#selecciondepersonal"> Selección de
                                        Personal</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="/nuestrosservicios/#headhunting"> Head Hunting</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="/nuestrosservicios/#capacitaciones"> Capacitaciones</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="/nuestrosservicios/#seguridadysalud"> Seguridad y Salud
                                        en el Trabajo</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="/nuestrosservicios/#produccion"> Producción de
                                        Eventos</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="/nuestrosservicios/#lanzamientos"> Lanzamientos</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="/nuestrosservicios/#lanzamientos"> Tecnología y
                                        Desarrollo</a>
                                </li>
                            </ul>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item dropdown ancor">
                            <a className="nav-link highlight-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Ubícanos
                            </a>
                            <ul id="ubicacion-dropdown" className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item highlight-list" href="#oprincipal" >Oficina
                                        Principal</a>
                                </li>
                                <li>
                                    <a className="dropdown-item highlight-list" href="#osucursal" >Oficina</a>
                                </li>
                            </ul>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item ancor">
                            <a className="nav-link highlight-link ancor" href="#ggg">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Eventos</a>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item ancor">
                            <a className="nav-link highlight-link ancor" href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>Trabaja con Nosotros
                            </a>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item ancor">
                            <a className="nav-link highlight-link ancor" href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor"
                                    className="bi bi-envelope" viewBox="0 0 20 15">
                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}