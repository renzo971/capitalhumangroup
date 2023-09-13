import capacitacion from "../images/Services/Capacitacion.jpg";
import Image from "next/image";
import styles from "../page.module.css";

export function Training() {
  return (
    <section id="capacitaciones">
      <div className="nuestros-valores">
          <div className="nuestros-valores">
            <div className="capa-title">
              <h4 className="titulo">Capacitaciones</h4>
              <div className="line-container-250">
                <div className="line"></div>
              </div>
            </div>
            <p>
              Como especialistas en procesos garantizamos una capacitación
              acorde a la labor que el cliente necesita. Nuestro esquema cuenta
              con una plataforma digital de evaluación especializada y el
              soporte de un staff de profesionales expertos. Nuestra metodología
              abarca todos los aspectos necesarios para una capacitación
              integral, trabajando en soluciones según las necesidades
              específicas de nuestros clientes.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
                  <div>
                    <h4>Brindamos las siguientes capacitaciones:</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        Capacitaciones de Liderazgo Ejecutivo.
                      </li>
                      <li className="list-group-item">
                        Capacitacion en Habilidades Blandas.
                      </li>
                      <li className="list-group-item">
                        Desarrollamos Planes de Capacitación a la medida.
                      </li>
                      <li className="list-group-item">
                        Planes de Capacitación Anual
                      </li>
                    </ul>
                  </div>
                    <div>
                      <h4>Metodología de Capacitación:</h4>

                      <ul className="list-group">
                        <li className="list-group-item">Auditoría Comercial.</li>
                        <li className="list-group-item">
                          Plan de Capacitación y Entrenamiento.
                        </li>
                        <li className="list-group-item">
                          Monitoreo, Control y Reforzamiento.
                        </li>
                      </ul>
                    </div>
              </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
              <Image
                src={capacitacion}
                className="img-fluid rounded-end-circle"
                alt="Capacitacion"
                width="400px"
                height="700px"
              />
            </div>
          </div>
      </div>
    </section>
  );
}
