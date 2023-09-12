import Image from 'next/image'
import LABORATORIOEMS from '../Assets/imagenes/convenios/LABORATORIOEMS.png'
import BEEBENEFICIOS from '../Assets/imagenes/convenios/BEEBENEFICIOS.svg'
import SISE from '../Assets/imagenes/convenios/SISE.jpg'
import MASEP from '../Assets/imagenes/convenios/MASEP.jpg'
import VISIONSALUD from '../Assets/imagenes/convenios/VISIONSALUD.png'
import IDAT from '../Assets/imagenes/convenios/IDAT.png'
export function Coveragecorp(){
    return (
        <div className="nuestros-valores">
        <h4 className="titulo text-center"><strong>Convenios Corporativos</strong></h4>
        <div className="line-container-300">
            <div className="line"></div>
        </div>
        <div className="slider">
        <div className="slide-track">
                    <div className="slide">
                    <Image src={LABORATORIOEMS} height="100" width="250" alt="" />
                    </div>
                    <div className="slide">
                    <Image src={BEEBENEFICIOS} height="100" width="250" alt="" />
                    </div>
                    <div className="slide">
                    <Image src={SISE} height="100" width="250" alt="" />
                    </div>
                    <div className="slide">
                    <Image src={MASEP} height="100" width="250" alt="" />
                    </div>
                    <div className="slide">
                    <Image src={VISIONSALUD} height="100" width="250" alt="" />
                    </div>
                    <div className="slide">
                    <Image src={IDAT} height="100" width="250" alt="" />
                    </div>
        </div>
    </div></div>
    )
}