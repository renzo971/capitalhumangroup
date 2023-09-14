export function Contactus() {
  return (
    <div className="col-md-6">
      <h1 className="text-center">Trabaja con Nosotros</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Nombre y Apeliido
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Digita tu nombre..."
          aria-label="Nombre y Apellido"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digita tu dni.."
          aria-label="Username"
        />
        <span className="input-group-text">DNI</span>
        <input
          type="text"
          className="form-control"
          placeholder="Puesto al que postula"
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
