import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), "posts")

export function getSortedPostsData() {
  
  const fileNames = fs.readdirSync(postDirectory)
  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, "")

    //Read markdown file as string
    const fullPath = path.join(postDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, "utf-8")

    //Use gra-matter to parse metada section

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data as {date: string, title: string}
    }
  })

  return allPostsData.sort((a, b) => {
    if(a.date < b.date) {
      return 1
    }else {
      return -1
    }
  })
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postDirectory)
  return fileNames.map(filename => {
    return {
      params: {
        id: filename.replace(/\.md$/, "")
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf-8")

  //Use gray matter to parse

  const matterResult = matter(fileContents)

  //Use remark to convert markdown to HTML
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  //Combine the data with id

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}