/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import Post from '../components/post'

export default function Home( { posts, users } ) {

  //maps posts to Post components
  const renderPosts = posts.map((post) => {
    return <Post post={post} user={users.filter(user => user.id === post.userId)}/>
  })

  return (
    <div sx={{ variant: 'containers.page' }}>
      <Head>
        <title>Code Challenge</title>
      </Head>
      <h1 sx={{ alignSelf: 'center', mt:'2em'}}>Pride Place Coding Challenge</h1>
      {renderPosts}
    </div>
  )
}

//data fetching
export async function getStaticProps() {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const postData = await posts.json()

  const users = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  const userData = await users.json()
  
  return {
    props: {
      posts: postData,
      users: userData
    }
  }
}