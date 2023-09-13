import Image from "next/image";
import producion from '../images/Services/produccion.jpg'
import tecnologia from '../images/Services/img_tecnologia.png'
export function Technologies() {
  return (
    <div>
      <section id="tecnologias">
        <div class="nuestros-valores">
          <h4 class="titulo">Tecnología y Desarrollo</h4>
          <div class="line-container-380">
            <div class="line"></div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
              En nuestra área de tecnología y desarrollo, nos apasiona crear soluciones digitales
                                innovadoras. Ofrecemos servicios de diseño y desarrollo de páginas web y aplicaciones
                                móviles personalizadas que se adaptan a las necesidades únicas de su empresa. Nuestro
                                equipo
                                de expertos en tecnología trabaja estrechamente con usted para comprender sus objetivos
                                y
                                traducirlos en soluciones digitales efectivas. Ya sea que necesite una presencia en
                                línea
                                impresionante o una aplicación móvil intuitiva, estamos aquí para convertir sus ideas en
                                realidad y llevar su negocio al siguiente nivel tecnológico.
              </p>
            </div>
            <div className="col-md-6">
              <Image
                src={tecnologia}
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
