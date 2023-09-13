import Image from "next/image";
import principal from "../images/edificio1.jpg";

export function Principal() {
  return (
    <div className="row align-items-center" id="principal">
        <h3 className="text-center m-3 bg-dark text-light">Oficina Principal</h3>
      <div className="col-md-6">
        <Image
          src={principal}
          className="img-fluid rounded-start-pill"
          alt="Caracterísitica"
          width="435px"
          height="550px"
        />
      </div>
      <div className="col-md-6">
        <div>
          <p>Se ubica en:</p>
          <p>
            <strong>Centro Empresarial 28 de Julio</strong>
          </p>
          <p>Av. 28 de Julio 753 - 755. Oficina 501. Miraflores, Lima</p>
        </div>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7693512882374!2d-77.02905428851194!3d-12.127927643369418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9a77fade237%3A0xe49b397308dd2a54!2sCapital%20Human%20Group!5e0!3m2!1sen!2spe!4v1687751718110!5m2!1sen!2spe"
            width="550px"
            height="360px"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
