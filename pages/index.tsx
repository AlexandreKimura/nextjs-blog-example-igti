import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilsStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyles.headingMd} >
        <p>
          Hi, my linkedin is <a href='https://www.linkedin.com/in/alexandre-mikio-kimura-fukano/'>Linkedin</a>
        </p>
        <p>Learning about concepts of NextJS</p>
      </section>
    </Layout>
  )
}
