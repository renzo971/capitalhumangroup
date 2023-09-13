import headhunting from "../images/Services/headhunting-1.png";
import style from "../page.module.css";
import Image from "next/image";

export function Headhunting() {
  return (
    <section id="headhunting">
      <div className="nuestros-valores">
        <h4 className="titulo">Headhunting</h4>
        <div className="line-container-230">
          <div className="line"></div>
        </div>
        <div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <Image
                src={headhunting}
                className="img-fluid rounded-start-pill"
                alt="Headhunting"
                width="939px"
                height="502px"
              />
            </div>
            <div className="col-md-6">
              <p className="text-justify">
                Realizamos procesos de Selección Ejecutiva para posiciones
                directivas tales como: Directores, Gerencia General, Gerencias /
                Gerencias intermedias. Del mismo modo cada proceso de nuestro
                cliente lo manejamos con la debida reserva garantizando la
                confidencialidad absoluta del manejo de información. <br />
                Contamos con una división cuyo enfoque no se resume en búsqueda
                tradicional, sino de brindar a las empresas, profesionales de
                impacto que generen valor. <br />
                Dentro de nuestro proceso utilizamos herramientas de alta
                tecnología, para optimizar tiempos y recursos con resultados aún
                más precisos en cada uno de ellos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
