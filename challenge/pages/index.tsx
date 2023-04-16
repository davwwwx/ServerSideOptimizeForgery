import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather APP</title>
        <meta name="description" content="BEST WEATHER APP ON THE MARKET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">WeatherAPP</Link>
        </h1>

        <p className={styles.description}>
          What&apos;s the weather like in{' '}
            <form action="/api/redirect">
                <input type="text" name="url"/>
                <button type="button">search !</button>
            </form><br/>
            <Image src="/cloud.png" alt="cloud"/>
        </p>

      </main>

    </div>
  )
}

/*
 */
