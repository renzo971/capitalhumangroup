import styles from "../page.module.css";
import Image from "next/image";
export function Outsourcing() {
  return (
    <div>
      <section id="outsourcing">
        <div className="nuestros-valores">
          <h4 className="titulo">
            Outsourcing y Consultoría en Gestión Humana
          </h4>
          <div className="line-container-300">
            <div className="line"></div>
          </div>

          <div className="row">
            <div className="col-sm-3 mb-3 mb-sm-0 hover ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cooperamos en el alineamiento</h5>
                  <p className="card-text">de sus normas ya establecidas para replicarlas con el personal
                  Tercerizado sin que se origine ningún punto que genere
                  contingencia.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0 hover ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Se desarrollan esquemas</h5>
                  <p className="card-text">bajo el marco Legal Laboral de la Ley de Tercialización Ley
                  29245.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0 hover ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Contamos con un equipo</h5>
                  <p className="card-text">de Analistas que desarrollan estrategias en las áreas
                  operativas para brindar a nuestros clientes un servicio
                  óptimo.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0 hover ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Administración de la fuerza laboral</h5>
                  <p className="card-text">brindando soluciones adecuadas para su buen desarrollo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
