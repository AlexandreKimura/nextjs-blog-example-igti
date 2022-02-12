import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilsStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetServerSideProps, GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: { 
  allPostsData: { entries: {API: string, Description: string}[]}
}) {
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
      <section className={`${utilsStyles.readingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Blog</h2>
        <ul className={utilsStyles.list}>
          {allPostsData.entries.map(({API, Description}) => (
            <li className={utilsStyles.listItem} key={API}>
              {API}
              <br/>
              {Description}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allPostsData = await getSortedPostsData()
  return allPostsData
}
