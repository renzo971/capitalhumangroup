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
                <p className="text-center">Tienen cobertura en las ciudades más importantes del Perú,<br />
                    con una alianza estratégica a través de la organización Nueva Acrópolis Internacional.</p>
                <div className="row align-items-center">
                    <div className="col-6 bg-secondary bg-gradient rounded-5">
                        <Image src={mapa} alt="expertos" className="d-block img-fluid hover" width={450}/>
                    </div>
                    <div className="col-6">
                    <Image src={acropolis} alt="expertos" className="d-block img-fluid hover" width={200} />
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