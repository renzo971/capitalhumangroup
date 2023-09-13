import styles from "../page.module.css";
import Image from "next/image";
import Outsourcing from "../images/Services/Outsourcing.jpg";
import TradeMarketingpromotor from "../images/Services/TradeMarketingpromotor.jpg";
import seleccion from "../images/Services/seleccion.jpg";
import headhunting from "../images/Services/headhunting.jpg";
import Capacitacion from "../images/Services/Capacitacion.jpg";
import seguridad_salud from "../images/Services/seguridad_salud.jpg";
import Eventos from "../images/Services/Eventos.jpg";
import Lanzamiento from "../images/Services/Lanzamiento.jpg";
import tecnologia from "../images/Services/tecnologia-negocios_4360384_20230428083829.jpg";

export function Servicelist() {
  return (
    <div className={styles.nuestrosservicios}>
      <div className="titulo text-center">
        <h4>
          <strong>Nuestros Servicios.</strong>{" "}
        </h4>
      </div>
      <div className="line-container-300">
        <div className="line"></div>
      </div>
      <div className={styles.serviciogrid}>
        <a className={styles.servicio} href="services/#outsourcing">
          <div className={styles.servicioimg}>
            <div className={styles.imgeffect}>
              <div className={styles.imgcontent}>
                <Image
                  className={styles.imgservicios}
                  src={Outsourcing}
                  width="180px"
                  height="180px"
                  alt="out"
                />
              </div>
            </div>
          </div>
          <div className={styles.servicioname}>
            Outsourcing y Consultoría en Gestión Humana
          </div>
        </a>
        <a className={styles.servicio} href="services/#trademarketing">
          <div className={styles.servicioimg}>
            <div className={styles.imgeffect}>
              <div className={styles.imgcontent}>
                <Image
                  className={styles.imgservicios}
                  src={TradeMarketingpromotor}
                  width="180px"
                  height="180px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.servicioname}>Trade Marketing</div>
        </a>
        <a className={styles.servicio} href="services/">
          <div className={styles.servicioimg}>
            <div className={styles.imgeffect}>
              <div className={styles.imgcontent}>
                <Image
                  className={styles.imgservicios}
                  src={seleccion}
                  width="180px"
                  height="180px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.servicioname}>Selección de Personal</div>
        </a>
        <a className={styles.servicio} href="services/">
          <div className={styles.servicioimg}>
            <div className={styles.imgeffect}>
              <div className={styles.imgcontent}>
                <Image
                  className={styles.imgservicios}
                  src={headhunting}
                  width="180px"
                  height="180px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.servicioname}>Headhunting</div>
        </a>
        <a className={styles.servicio} href="services/">
          <div className={styles.servicioimg}>
            <div className={styles.imgeffect}>
              <div className={styles.imgcontent}>
                <Image
                  className={styles.imgservicios}
                  src={Capacitacion}
                  width="180px"
                  height="180px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.servicioname}>Capacitaciones</div>
        </a>
        <a className={styles.servicio} href="services/">
          <div className={styles.servicioimg}>
            <div className={styles.imgeffect}>
              <div className={styles.imgcontent}>
                <Image
                  className={styles.imgservicios}
                  src={seguridad_salud}
                  width="180px"
                  height="180px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.servicioname}>
            Seguridad y Salud en el Trabajo
          </div>
        </a>
        <a className={styles.servicio} href="services/">
          <div className={styles.servicioimg}>
            <div className={styles.imgeffect}>
              <div className={styles.imgcontent}>
                <Image
                  className={styles.imgservicios}
                  src={Eventos}
                  width="180px"
                  height="180px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.servicioname}>Producción de Eventos</div>
        </a>
        <a className={styles.servicio} href="services/">
          <div className={styles.servicioimg}>
            <div className={styles.imgeffect}>
              <div className={styles.imgcontent}>
                <Image
                  className={styles.imgservicios}
                  src={Lanzamiento}
                  width="180px"
                  height="180px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.servicioname}>Lanzamientos</div>
        </a>
        <a className={styles.servicio} href="services/">
          <div className={styles.servicioimg}>
            <div className={styles.imgeffect}>
              <div className={styles.imgcontent}>
                <Image
                  className={styles.imgservicios}
                  src={tecnologia}
                  width="180px"
                  height="180px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.servicioname}>Tecnologías y Desarrollo</div>
        </a>
      </div>
    </div>
  );
}
