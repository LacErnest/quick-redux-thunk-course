import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { fetchingPosts } from './actions'


function App() {
  
  const posts = useSelector((store) => store.posts)
  const loading = useSelector((store) => store.loading)

  console.log(posts)
  console.log(loading)
  const dispatch = useDispatch()

  //componentDidMount() // componentDidUpdate()

  useEffect(() => {
    dispatch(fetchingPosts())
  }, [] //means no dependencies
  );
  
  console.log(posts)
  console.log(loading)

  const allPosts = posts.map(
    post => <li key={post.id}>{post.title}</li>
  )

  return (
    loading===true ? <div>Loading ...</div> :
    <div className="App">
      <ul>{allPosts}</ul> 
    </div>
  )
}

export default App
