import Image from "next/image";
import logo from "../Assets/imagenes/Logo/logosoloCHG.png";
import logoc from "../Assets/imagenes/Logo/logoComputrabajo.png";
import { FaFacebookF, FaLinkedin, FaTablet, FaMailBulk } from "react-icons/fa";
import { BsFillPinMapFill } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conectate a nuestras redes sociales</span>
        </div>
        <div>
          <a
            href="https://www.facebook.com/CapitalHumanGroup/"
            className="me-4 text-reset"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/capital-human-group/"
            className="me-4 text-reset"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://pe.computrabajo.com/empresas/acerca-de-capital-human-group-sac-88CA44472D21AF06"
            className="me-4 text-reset"
          >
            <Image
              src={logoc}
              className="img-fluid rounded-start"
              alt="compu"
              height={20}
              width={20}
            />
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>{" "}
                <Image
                  src={logo}
                  alt="expertos"
                  className="img-fluid"
                  width={40}
                  height={40}
                />
                <span className="degradado">
                  <strong>CAPITAL HUMAN </strong>
                </span>{" "}
                <span className="group">
                  <strong>GROUP</strong>{" "}
                </span>
              </h6>
              <h5>
                Somos una empresa que la conforman profesionales expertos en
                materia de Recursos Humanos, Negocios y la Gestion de
                Resultados.
              </h5>
              <h5>
                Nuestro compromiso es en contar con una fuerza laboral idónea,
                con afinidad, lealtad y alto sentido de profesionalismo,
                buscando capturar la mayor cuota de mercado en todas sus
                categorías.
              </h5>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
              <p>
                <a href="#!" className="text-reset">
                  Outsourcing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Trade Marketing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Selección de Personal
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Head Hunting
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Capacitaciones
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Seguridad y Salud en el Trabajo
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Producción de Eventos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Lanzamientos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tecnología y Desarrollo
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Ubicanos</h6>
              <p>
                <BsFillPinMapFill />
                <a href="https://www.google.com/maps/place/Av.+28+de+Julio+753,+Miraflores+15074/@-12.1279329,-77.0290489,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c81dc8bd8769:0xbad5fca09871d63b!8m2!3d-12.1279329!4d-77.026474!16s%2Fg%2F11f2b6b3w6?entry=ttu">
                  <strong>Centro Empresarial 28 de Julio</strong>
                </a>
                <br />
                Av. 28 de Julio 753 - 755. Oficina 501.
                <br />
                Miraflores, Lima
              </p>
              <p>
                <BsFillPinMapFill />
                <a href="https://www.google.com/maps/place/C.+Coronel+Incl%C3%A1n+231,+Miraflores+15074/@-12.1175585,-77.0340698,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c817bdb331c7:0xb41870b006e409fb!8m2!3d-12.1175585!4d-77.0314949!16s%2Fg%2F11h401xvd2?entry=ttu">
                  <strong>Edificio Corporativo BUI building</strong>
                </a>
                <br />
                Coronel Inclan 231 - 235. Oficina 608.
                <br />
                Miraflores, Lima
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contáctanos</h6>
              <p>
                ¿Tienes alguna duda o consulta?
                <br />
                No dudes en comunicarte con nosotros:
              </p>
              <p>
                <BsFillPinMapFill />
                <a href="https://www.google.com/maps/place/C.+Coronel+Incl%C3%A1n+231,+Miraflores+15074/@-12.1175585,-77.0340698,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c817bdb331c7:0xb41870b006e409fb!8m2!3d-12.1175585!4d-77.0314949!16s%2Fg%2F11h401xvd2?entry=ttu">
                  <strong>Edificio Corporativo BUI building</strong>
                </a>
                <br />
                <BsFillPinMapFill />
                <a href="https://www.google.com/maps/place/Av.+28+de+Julio+753,+Miraflores+15074/@-12.1279329,-77.0290489,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c81dc8bd8769:0xbad5fca09871d63b!8m2!3d-12.1279329!4d-77.026474!16s%2Fg%2F11f2b6b3w6?entry=ttu">
                  <strong>Centro Empresarial 28 de Julio</strong>
                </a>
              </p>
              <p> 
                <FaTablet />
                <a href="tel:+51016807791">(01) 6807791</a>
              </p>
              <p>
                <FaMailBulk /><a className="btn btn-link" href="mailto:info@capitalhuman.pe">
                  info@capitalhuman.pe
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <strong>Copyright © Capital Human Group. All rights reserved.</strong>
      </div>
    </footer>
  );
}
