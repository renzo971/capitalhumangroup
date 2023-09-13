import { Principal } from "./Components/Principal";
import { Secundary } from "./Components/Secundary";

export default function Locateus() {
  return (
    <main className="container">
      <div id="Characteristics">
        <div className="nuestros-valores">
          <h4 className="titulo text-center">Ubicanos</h4>
          <div className="line-container-380">
            <div className="line"></div>
          </div>
          <Principal />
          <Secundary/>
        </div>
      </div>
    </main>
  );
}
