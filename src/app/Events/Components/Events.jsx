import Image from "next/image";
import evento from '../image/evento.jpeg'
import diadelpadre from '../image/diadelpadre.jpeg'

export function Event() {
  return (
    <section id="headhunting">
        <br />
        <div className="row align-items-center">
            <div className="col-md-4">
            <div className="card hover align-items-center">
        <Image src={evento} className="card-img-top" alt="..." height={300}/>
        <div className="card-body">
          <h5 className="card-title">Lanzamiento</h5>
          <p className="card-text">
          Revive el emocionante lanzamiento de nuestra nueva marca. ¡Descubre todo lo que presentamos en este día especial!... 
          </p>
        </div>
      </div>
            </div>
            <div className="col-md-4">
            <div className="card hover align-items-center">
        <Image src={diadelpadre} className="card-img-top" alt="..." height={300}/>
        <div className="card-body">
          <h5 className="card-title">Día del Padre</h5>
          <p className="card-text">
          Revive la emoción del Día del Padre en nuestro evento especial con momentos inolvidables y gratitud hacia los papás...
          </p>
        </div>
      </div>
            </div>
            <div className="col-md-4">
            <div className="card hover align-items-center">
        <Image src={diadelpadre} className="card-img-top" alt="..." height={300}/>
        <div className="card-body">
          <h5 className="card-title">Día del Promotor</h5>
          <p className="card-text">
          Revive la emoción del Día del Promotor que celebra y agradece a los promotores por su dedicación...
          </p>
        </div>
      </div>
            </div>
        </div>

    </section>
  );
}
