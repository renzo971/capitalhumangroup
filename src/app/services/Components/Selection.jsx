import Image from 'next/image'
import styles from '../page.module.css'
import entrevista from '../images/Services/Entrevistas.jpg'
export function Selection(){
    return(
        <div id="selecciondepersonal">
        <div className='nuestros-valores'>
            <h4 className="titulo text-center">Selección de Personal</h4>
            <div className="line-container-380">
                <div className="line"></div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                <p>Garantizamos un proceso de búsqueda alineado a los requerimientos del puesto,
                    estimulando de esta forma un mayor compromiso con los resultado de la gestión.
                    <br/>
                    Nuestro esquema se basa en un alto sentido de profesionalismo y el soporte de un
                    staff de psicólogos expertos en evaluación de todo tipo de perfiles.
                    <br/>
                    Realizamos Procesos de Selección Especializados para los distintos puestos
                    tales como: Mandos Medios, Jefaturas, Gerencias Intermedias, etc.
                    Del mismo modo cada proceso de nuestros clientes lo manejamos con la
                    debida reserva, garantizando la confidencialidad absoluta del manejo de
                    información. <br />
                    Contamos con expertos profesionales para las validaciones técnicas de
                    acuerdo a los sectores: Trade Marketing, Agroindustria, Energía, Minería,
                    Hidrocarburos entre otros.
                </p>
                </div>
                <div className="col-md-6">
                <Image  src={entrevista} className='img-fluid rounded-end-circle'alt="Entrevista"
                    width="800" height="395px"/>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
    )
}