import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilsStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import useSWR from 'swr'
import Link from 'next/link'
import Date from '../components/date'

//const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json())

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  //const { data } = useSWR("https://api.publicapis.org/entries", fetcher)
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
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilsStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <small className={utilsStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
