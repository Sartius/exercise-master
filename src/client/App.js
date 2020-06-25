import React, { useEffect, useState, Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './app.css'
import { loadPosts, postPosts } from './modules/posts'
import Playout from './Components/Layout'
import { render } from 'react-dom'


class App extends Component {
  state = {
    posts: [
      {
        id: "1",
        title: "1"
        , text: "Text"
        , author: "Armin Subasic"
        , parent: null
        , insert_date: "2020-06-24T22:00:00.000Z"
      },
      {
        id: "2",
        title: "2!"
        , text: "T you know?"
        , author: "Armin Subasic"
        , parent: null
        , insert_date: "2020-06-24T22:00:00.000Z"
      },
      {
        id: "3",
        title: "3!"
        , text: "T you know?"
        , author: "Armin Subasic"
        , parent: null
        , insert_date: "2020-06-24T22:00:00.000Z"
      },
      {
        id: "4",
        title: "1.1"
        , text: "T you know?"
        , author: "Armin Subasic"
        , parent: "1"
        , insert_date: "2020-06-24T22:00:00.000Z"
      },
      {
      id: "5",
      title: "1.1.1"
      , text: "T you know?"
      , author: "Armin Subasic"
      , parent: "4"
      , insert_date: "2020-06-24T22:00:00.000Z"
    },
    {
      id: "6",
      title: "1.1.2"
      , text: "T you know?"
      , author: "Armin Subasic"
      , parent: "4"
      , insert_date: "2020-06-24T22:00:00.000Z"
    }
    ]
  }
  handleOnSubmit = (e, newPost) => {
    console.log(newPost)
    let data = this.state.posts;
    data.push({
      id: data.length + 1,
      title: newPost.title,
      author: newPost.author,
      text: newPost.text,
      parent: null,
      insert_date: "2020-06-24T22:00:00.000Z"
    })
    this.setState(
      {posts: data}
      )
  }
  // const dispatch = useDispatch()
  // const posts = useSelector(state => state.posts)

  // useEffect(() => {
  //   // dispatch(postPosts(
  //     // {
  //     //   title: "I !"
  //     //   , text: "T you know?"
  //     //   , author: "Armin Subasic"
  //     //   , parent: null
  //     //   , insert_date: "2020-06-24T22:00:00.000Z"
  //     // }
  //   // ))
  //    dispatch(loadPosts())
  // }, [])
  
  render() {
    console.log(this.state)
    return (
      // <div>
      //   <p>HH</p>
      //   <div>
      //     <pre>{JSON.stringify(posts, null, 2)}</pre>
      //   </div>
      // </div>
  
      <Playout posts={this.state.posts} handleSubmit={this.handleOnSubmit}/>
      
    )
  }

}



export default App
