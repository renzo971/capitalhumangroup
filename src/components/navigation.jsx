import Link from 'next/link'
import Image from 'next/image'
import logo from '../Assets/imagenes/Logo/logosoloCHG.png'
export function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
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
                            <Link className="nav-link highlight-link" href="/">Inicio</Link>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item dropdown ancor">
                            <Link className="nav-link highlight-link dropdown-toggle" href="#hola" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Empresa
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/#about"> ¿Quiénes somos?</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/#visionmision"> Visión y misión</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/#objetivos"> Nuestros objetivos</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/#cobertura"> Cobertura Nacional</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/#convenios"> Convenios Corporativos</Link>
                                </li>
                            </ul>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item dropdown ancor">
                            <Link className="nav-link highlight-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Nuestros Servicios
                            </Link>
                            <ul className="dropdown-menu">
                            <li>
                                    <Link id="servicios-link" className="dropdown-item highlight-list" href="/services">
                                       Servicios</Link>
                                </li>
                                <li>
                                    <Link id="servicios-link" className="dropdown-item highlight-list" href="/services/#outsourcing">
                                        Outsourcing y
                                        Consultoría en Gestión Humana</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/services/#trademarketing"> Trade
                                        Marketing</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/services/#selecciondepersonal"> Selección de
                                        Personal</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/services/#headhunting"> Head Hunting</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/services/#capacitaciones"> Capacitaciones</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/services/#security"> Seguridad y Salud
                                        en el Trabajo</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/services/#produccion"> Producción de
                                        Eventos</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/services/#lanzamientos"> Lanzamientos</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="/services/#lanzamientos"> Tecnología y
                                        Desarrollo</Link>
                                </li>
                            </ul>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item dropdown ancor">
                            <Link className="nav-link highlight-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Ubícanos
                            </Link>
                            <ul id="ubicacion-dropdown" className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item highlight-list" href="Locateus#principal" >Oficina
                                        Principal</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item highlight-list" href="Locateus#secundaria" >Oficina
                                        Secundaria</Link>
                                </li>
                            </ul>
                        </li>
                        <div className="pad-3"></div>
                        <li className="nav-item ancor">
                            <Link className="nav-link highlight-link ancor" href="/Events">
                                Eventos</Link>
                        </li>
                        <div className="pad-3"></div>
                        <div className="pad-3"></div>
                        <li className="nav-item ancor">
                            <Link className="nav-link highlight-link ancor" href="/Contact">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor"
                                    className="bi bi-envelope" viewBox="0 0 20 15">
                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}