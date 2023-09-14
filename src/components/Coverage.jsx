import Image from "next/image"
import mapa from '../Assets/imagenes/convenios/MAPA-DEL-PERU-blanco.png'
import acropolis from '../Assets/imagenes/convenios/Nueva-Acropolis.png'
const infoData = [
    {
        title: 'Lima'
    },
    {
        title: 'Trujillo'
    },
    {
        title: 'Chiclayo'
    },
    {
        title: 'Ica'
    },
    {
        title: 'Cajamarca'
    },
    {
        title: 'Cusco'
    },
    {
        title: 'Loreto'
    },
    {
        title: 'Arequipa'
    },
    {
        title: 'Piura'
    }
];
export function Coverage() {
    return (
            <div className="nuestros-valores" id="cobertura">
                <h4 className="titulo"><strong>Cobertura</strong></h4>
                <div className="line-container-300">
                    <div className="line"></div>
                </div>
                <h5 className="text-center"><strong>CAPITAL HUMAN GROUP S.A.C.</strong></h5> 
                <p>tienen cobertura en las ciudades más importantes del Perú,
                    con
                    una alianza estratégica a través de la organización Nueva Acrópolis Internacional.</p>
                <div className="row align-items-center">
                    <div className="col-7 bg-dark">
                        <Image src={mapa} alt="expertos" className="d-block img-fluid" />
                    </div>
                    <div className="col-5">
                    <Image src={acropolis} alt="expertos" className="d-block img-fluid" />
                    <ul>
                    {infoData.map((info, index) => (
                        <li key={index}><small>{info.title}</small></li>
                    ))}
                    </ul>

                    </div>

                </div>
            </div>
    )
}