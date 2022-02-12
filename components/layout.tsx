import React from "react";
import Image from "next/image";
import styles from './layout.module.css'
import utilsStyles from '../styles/utils.module.css'
import Head from "next/head";
import Link from "next/link";

const name = 'Alexandre Fukano'
export const siteTitle = "Aprendendo conceitos do Next.js"

export default function Layout({children, home}: {children: React.ReactNode, home: boolean}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website with Next.js" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image priority src="/images/myphoto.jpg" className={utilsStyles.borderCircle} height={144} width={144} alt={name}/>
            <h1 className={utilsStyles.heading2XL}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image priority src="/images/myphoto.jpg" className={utilsStyles.borderCircle} height={108} width={108} alt={name}/>
              </a>
            </Link>
            <h2 className={utilsStyles.headingLg}>
              <Link href="/" >
                <a className={utilsStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}