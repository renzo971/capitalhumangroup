import Image from "next/image"
const infoData = [
    {
        title: 'FOCO en el CORE BUSINESS.',
        description: 'Diseñar un sistema de control de costos para optimizar los recursos. Para ello contamos con nuestro Equipo de Intelligent Business (Analistica Comercial de Gestión).',
    },
    {
        title: 'Optimizar el tiempo y recursos.',
        description: [
            'Optimizar el tiempo y recursos.',
            'Dar soluciones a nuestros clientes de manera ágil y pronta.',
            'Generar confianza y ser altamente fiables.'
        ],
    },
    {
        title: 'Generar Valor.',
        description: 'Lograr que las Empresas trabajen con mayor orden y estén preparadas para un excelente crecimiento organizacional.',
    }
];
export function Ourobjetives() {
    return (
        <>
            <div className="nuestros-valores">
                <h4 className="titulo"><strong>Nuestros Objetivos</strong></h4>
                <div className="line-container-300">
                    <div className="line"></div>
                </div>
                <div className="row">
                    {infoData.map((info, index) => (
                        <div className="col-sm-4 mb-3 mb-sm-0 hover">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{info.title}</h5>
                                    <p className="card-text">{info.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}