import Image from "next/image";
import Expertos from "../Assets/imagenes/About/Expertos.png";
import Seleccion from "../Assets/imagenes/About/Seleccion.png";
import Trade from "../Assets/imagenes/About/Trade.png";
import Howareyou from "../Assets/imagenes/About/Quienessomos.png";
export function About() {
  return (
    <>
        <div
          id="carouselExampleInterval"
          className="carousel slide m-4 hover "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1500">
              <Image
                src={Expertos}
                alt="expertos"
                className="rounded-4 img-fluid"
              />
            </div>
            <div className="carousel-item" data-bs-interval="1500">
              <Image
                src={Seleccion}
                alt="Seleccion"
                className="rounded-4 img-fluid"
              />
            </div>
            <div className="carousel-item" data-bs-interval="1500">
              <Image src={Trade} alt="Trade" className="rounded-4 img-fluid" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        <div className="row align-items-center m-3 border border-primary" id="about">
          <div className="col-md-6">
            <h1 className="text-center">CAPITAL HUMAN GROUP S.A.C.</h1>
            <p className="text-center">
            Es una empresa que la conforman profesionales expertos en materia <br />
              Gestión de Resultados, Business Intelligence <br />  y Consultoría
              Especializada en Gestión del Talento.
            </p>
          </div>
          <div className="col-md-6 hover">
            <Image
              src={Howareyou}
              alt="Quienes somos"
              className="rounded-4 img-fluid"
            />
          </div>
        </div>
    </>
  );
}
