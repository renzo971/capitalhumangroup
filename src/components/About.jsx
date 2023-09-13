import Image from "next/image";
import Expertos from "../Assets/imagenes/About/Expertos.png";
import Seleccion from "../Assets/imagenes/About/Seleccion.png";
import Trade from "../Assets/imagenes/About/Trade.png";
import Howareyou from "../Assets/imagenes/About/Quienessomos.png";
export function About() {
  return (
    <>
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel slide m-4 hover "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <Image
                src={Expertos}
                alt="expertos"
                className="rounded-4 img-fluid"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Image
                src={Seleccion}
                alt="Seleccion"
                className="rounded-4 img-fluid"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
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
        <br />
        <div className="card m-4 hover text-center" id="about">
          <div className="card-body">
            <h5 className="card-title ">CAPITAL HUMAN GROUP S.A.C.</h5>
            <p className="card-text ">
              Es una empresa que la conforman profesionales expertos en materia
              Gestión de Resultados, Business Intelligence y Consultoría
              Especializada en Gestión del Talento.
            </p>
            <Image
              className="card-img-bottom rounded-4 img-fluid"
              src={Howareyou}
              alt="QuienesSomos"
            />
          </div>
        </div>
      </div>
    </>
  );
}
