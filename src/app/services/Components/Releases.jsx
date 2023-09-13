import Image from "next/image";
import lanzamientos from '../images/Services/lanzamientos.jpg'
export function Releases() {
  return (
    <div>
      <section id="lanzamientos">
        <div class="nuestros-valores">
          <h4 class="titulo">Lanzamientos</h4>
          <div class="line-container-380">
            <div class="line"></div>
          </div>
          <div className="row align-items-center">

            <div className="col-md-6">
              <Image
                src={lanzamientos}
                alt="Produccion de eventos"
                width="800px"
                className="img-fluid rounded-end-circle"
              />
            </div>
            <div className="col-md-6">
              <p>
              ¿Está listo para presentar su nuevo producto al mundo? Nuestro equipo de lanzamientos se
                                especializa en ofrecer servicios de lanzamiento de productos que capturan la atención
                                del
                                mercado y generan un gran impacto. Trabajamos de cerca con su empresa para diseñar
                                estrategias personalizadas que resalten las características únicas de su producto y lo
                                posicionen de manera efectiva frente a su público objetivo. Desde eventos de lanzamiento
                                exclusivos hasta campañas de marketing integradas, estamos aquí para ayudarlo a alcanzar
                                el
                                éxito en cada etapa del proceso de lanzamiento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
