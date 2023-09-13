import Image from "next/image";
import principal from "../images/edificio1.jpg";

export function Secundary() {
  return (
    <div className="row align-items-center" id="secundaria">
        <h3 className="text-center m-3 bg-dark text-light">Oficina Secundaria</h3>
      <div className="col-md-6">
        <div>
          <p>Se ubica en:</p>
          <p>
            <strong>Centro Empresarial 28 de Julio</strong>
          </p>
          <p>Coronel Inclan 231 - 235. Oficina 608. Miraflores, Lima</p>
        </div>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9200204025747!2d-77.03406978851218!3d-12.117624743176336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9dc474f4c6d%3A0x7bc738ae6ff84b85!2sCapital%20Human%20Group!5e0!3m2!1sen!2spe!4v1687751758715!5m2!1sen!2spe"
            width="550px"
            height="360px"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="col-md-6">
        <Image
          src={principal}
          className="img-fluid rounded-end-circle"
          alt="Caracterísitica"
          width="435px"
          height="550px"
        />
      </div>
    </div>
  );
}
