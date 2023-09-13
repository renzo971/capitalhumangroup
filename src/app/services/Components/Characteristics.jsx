import Image from "next/image";
import characteristics from "../images/Services/img_caracteristica.png";
import styles from "../page.module.css";
import { BsCheck } from "react-icons/bs";
export function Characteristics() {
  return (
    <div id="Characteristics">
      <div className="nuestros-valores">
        <h4 className="titulo text-center">Características del Servicio</h4>
        <div className="line-container-380">
          <div className="line"></div>
        </div>
        <p className="text-center">
          En CAPITAL HUMAN GROUP ponemos al servicio de nuestros clientes
          nuestro staff operativo y administrativo, para asistirlos en sus
          necesidades en Lima y Provincias y a nivel Internacional.
        </p>
        <p>Nuestro compromiso es:</p>
        <div className="row aling-items-center">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <BsCheck />
                Mejorar la Competitividad.
              </li>
              <li className="list-group-item">
                <BsCheck />
                Lograr la Eficiencia en la Gestión y Planificación.
              </li>
              <li className="list-group-item">
                <BsCheck />
                Mejorar la Productividad.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <Image
              src={characteristics}
              className="img-fluid rounded-end-circle"
              alt="Caracterísitica"
              width="435px"
              height="550px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
