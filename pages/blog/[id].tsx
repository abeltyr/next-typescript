const posts = {
  "test": {
    "title": "test post",
    "content": "Hey some post content"
  },
  "second": {
    "title": "second post",
    "content": "Hey this is the second post content"
  }
};


const Post = (props) => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  )
}

Post.getInitialProps = ({ query, pathname, asPath }) => {
  console.log(pathname, asPath)
  return {
    post: posts[query.id]
  }
}

export default Post;