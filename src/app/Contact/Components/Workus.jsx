export function Workus() {
    return (
      <div className="col-md-6"> 
      <h1 className="text-center">Contactate con Nosotros</h1> 
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Digita tu nombre.."
            aria-label="Username"
          />
          <span className="input-group-text">Nombre y apellido</span>
          <input
            type="text"
            className="form-control"
            placeholder="Celular..."
            aria-label="Server"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Correo..."
            aria-label="Username"
          />
          <span className="input-group-text">@</span>
          <input
            type="text"
            className="form-control"
            placeholder="Departamento"
            aria-label="Server"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Digita tu Ruc.."
            aria-label="Username"
          />
          <span className="input-group-text">RUC</span>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de la empresa"
            aria-label="Server"
          />
        </div>
  
        <div className="input-group">
          <span className="input-group-text">Comentario o mensaje</span>
          <textarea className="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
    );
  }
  