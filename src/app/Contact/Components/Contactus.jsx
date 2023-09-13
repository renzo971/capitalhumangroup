export function Contactus() {
  return (
    <div className="col-md-6">
      <h1 className="text-center">Contactate con Nosotros</h1>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Nombre y Apeliido
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Digita tu nombre..."
          aria-label="Nombre y Apellido"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Digita tu dni.."
          aria-label="Username"
        />
        <span class="input-group-text">DNI</span>
        <input
          type="text"
          class="form-control"
          placeholder="Puesto al que postula"
          aria-label="Server"
        />
      </div>

      <div class="input-group">
        <span class="input-group-text">Comentario o mensaje</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  );
}
