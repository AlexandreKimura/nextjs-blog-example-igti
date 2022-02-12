import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


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