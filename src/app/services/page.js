import { Servicelist } from "./Components/service";
import { Characteristics } from "./Components/Characteristics";
import { Outsourcing } from "./Components/Outsourcing";
import { Trademarketing } from "./Components/trademarketing";
import { Selection } from "./Components/Selection";
import { Headhunting } from "./Components/Headhunting";
import { Training } from "./Components/Training";
import styles from '../page.module.css'
import { Security } from "./Components/Security";
import { Production } from "./Components/Production";
import { Releases } from "./Components/Releases";
import { Technologies } from "./Components/Technologies";

export default function Services() {
  return (
    <main className="container">
       <Servicelist />
       <Characteristics />
       <Outsourcing />
       <Trademarketing />
       <Selection />
       <Headhunting />
       <Training />
       <Security/>
       <Production/>
       <Releases/>
       <Technologies/>
    </main>
  )
}
