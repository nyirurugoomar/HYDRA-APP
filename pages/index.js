import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
   
  <div>
    <Head>
      <title>Hydra app</title>
      <meta name='' content=''/>
      <link rel='icon' href='/favicon.ico'/>
    </Head>
    <Hero/>
  </div>
  )
}
