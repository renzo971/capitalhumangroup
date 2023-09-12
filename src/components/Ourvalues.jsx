import Image from "next/image"
const infoData = [
  {
    title: 'Profesionalismo',
    description: 'Nuestro enfoque riguroso y ético garantiza resultados de calidad y confianza en todas nuestras interacciones y servicios.',
  },
  {
    title: 'Meritocracia',
    description: 'Reconocemos y recompensamos el talento y los logros individuales, fomentando un ambiente justo y equitativo para el crecimiento profesional.',
  },
  {
    title: 'Integridad',
    description: 'Actuamos con honestidad, transparencia y responsabilidad, manteniendo altos estándares éticos en cada decisión y acción que tomamos.',
  },
  {
    title: 'Compromiso',
    description: 'Nos comprometemos a brindar soluciones excepcionales y a superar las expectativas de nuestros clientes y colaboradores en cada proyecto que emprendemos.',
  },
  {
    title: 'Pasión',
    description: 'Nos apasiona lo que hacemos y nos esforzamos por transmitir esa energía a través de nuestro trabajo, generando resultados inspiradores y significativos.',
  },
  {
    title: 'Trabajo en Equipo',
    description: 'Valoramos la colaboración y el respeto mutuo, creando un entorno donde el trabajo en equipo fomente la creatividad, la innovación y el éxito colectivo.',
  },
  {
    title: 'Fuerza',
    description: 'Afrontamos desafíos con determinación y resistencia, encontrando soluciones efectivas y superando obstáculos para alcanzar el éxito en cada tarea.',
  },
  {
    title: 'Optimismo',
    description: 'Mantenemos una actitud positiva y proactiva, buscando oportunidades en cada situación y fomentando un ambiente motivador y optimista.',
  },
  {
    title: 'Alegría',
    description: 'Celebramos los logros, disfrutamos del trabajo y promovemos un ambiente de alegría y camaradería, creando una cultura positiva y enriquecedora.',
  }
];
export function Ourvalues() {
  return (
    <>
    <div className="nuestros-valores">
                <h4 className="titulo"><strong>Nuestros Valores</strong></h4>
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