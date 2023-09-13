import { Contactus } from "./Components/Contactus";
import { Workus } from "./Components/Workus";

export default function Contact() {
  return (
    <main className="container">
      <div className="row">
        <Contactus/>
        <Workus/>
      </div>

    </main>
  )
}
