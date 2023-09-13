import Image from "next/image";
import producion from '../images/Services/produccion.jpg'
export function Production() {
  return (
    <div>
      <section id="produccion">
        <div class="nuestros-valores">
          <h4 class="titulo">Producción de Eventos</h4>
          <div class="line-container-380">
            <div class="line"></div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                Nuestro equipo de producción de eventos está especializado en la
                organización de fiestas y celebraciones dedicadas a promocionar
                su marca. Nos encargamos de crear eventos memorables que
                fortalecen los lazos empresariales y generan un impacto duradero
                en su público objetivo. Desde la planificación y coordinación
                hasta la ejecución impecable, trabajamos de cerca con usted para
                garantizar que cada detalle se ajuste a sus necesidades y
                objetivos de marketing. Confíe en nosotros para llevar su marca
                al siguiente nivel a través de experiencias únicas y
                cautivadoras.
              </p>
            </div>
            <div className="col-md-6">
              <Image
                src={producion}
                alt="Produccion de eventos"
                width="800px"
                className="img-fluid rounded-end-circle"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
