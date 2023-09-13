import styles from "../page.module.css";
import Image from "next/image";
import promotor from "../images/Services/TradeMarketingpromotor.jpg";
import { BsCartCheck, BsCheck2 } from "react-icons/bs";
export function Trademarketing() {
  return (
    <section id="trademarketing">
        <div className='nuestros-valores'>
            <h4 className="titulo text-center">Trade Marketing</h4>
            <div className="line-container-380">
                <div className="line"></div>
            </div>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <Image
              className="img-fluid rounded-circle"
              src={promotor}
              alt="promotora"
              width="550px"
            />
          </div>
          <div className="col-sm-6 mb-3 mb-sm-0">
            <ul className="list-group">
              <li className="list-group-item">
                <BsCheck2 /> Realizamos Gestiones en el PDV 24/7.
              </li>
              <li className="list-group-item">
                <BsCheck2 />
                Realizamos campañas 360° con la fuerza de venta.
              </li>
              <li className="list-group-item">
                <BsCheck2 />
                Realizamos Activaciones Online y en Vivo en el PDV.
              </li>
              <li className="list-group-item">
                <BsCheck2 />
                Desarrollamos actividades de fortalecimiento de Marca.
              </li>
              <li className="list-group-item">
                <BsCheck2 />
                Generamos Análisis Comerciales con Indicadores Activos.
              </li>
              <li className="list-group-item">
                <BsCheck2 />
                Administramos los recursos para la gestión de TRADE MARKETING.
              </li>
              <li className="list-group-item">
                <BsCheck2 />
                Realizamos plan de fidelización para Trade por RR.HH.
                Metodología Innovadora.
              </li>
              <li className="list-group-item">
                <BsCheck2 />
                Realizamos 1 Activación Marca Empleador, 1 vez al año para
                destacar vs competencias.
              </li>
              <li className="list-group-item">
                <BsCheck2 />
                Nos encargamos implementar estrategias de marketing centrada en
                posicionar estratégicamente la mercancía en los puntos de venta.
                Para estimular el consumo de estos productos, se desarrollan
                acciones en los canales de distribución con el objetivo de
                atraer la atención del consumidor y luego generar el deseo de
                comprar.
              </li>
              <li className="list-group-item">
                <BsCheck2 />
                Trabajamos con herramientas tecnológicas de Gestión y Análisis
                Comercial para toma de decisiones conectadas a las cadenas y
                PDV.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
