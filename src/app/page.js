import { About } from '../components/About'
import { MisionVision } from '@/components/Misionvision'
import { Ourvalues } from '@/components/Ourvalues'
import { Ourobjetives } from '@/components/Ourobjectives'
import { Coverage } from '@/components/Coverage'
import { Coveragecorp } from '@/components/Coveragecorp'

export default function Home() {
  return (
    <main className="container">
      <About />
      <MisionVision />
      <Ourvalues />
      <Ourobjetives />
      <Coverage />
      <Coveragecorp />
    </main>
  )
}
