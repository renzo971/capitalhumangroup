import Image from 'next/image'
import styles from './page.module.css'
import { About } from '../components/About'
import { MisionVision } from '@/components/Misionvision'
import { Ourvalues } from '@/components/Ourvalues'
import { Ourobjetives } from '@/components/Ourobjectives'
import { Coverage } from '@/components/Coverage'
import { Coveragecorp } from '@/components/Coveragecorp'	

export default function Home() {
  return (
    <main className={styles.main}>
      <About></About>
      <MisionVision></MisionVision>
      <Ourvalues></Ourvalues>
      <Ourobjetives></Ourobjetives>
      <Coverage></Coverage>
      <Coveragecorp></Coveragecorp>
    </main>
  )
}
