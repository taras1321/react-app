import { Component } from 'react'
import './app.scss'
import Header from '../header/Header'
import SearchPanel from '../search-panel/SearchPanel'
import PostFilter from '../post-filter/PostFilter'
import PostList from '../post-list/PostLst'
import PostAddForm from '../post-add-form/PostAddForm'

export default class App extends Component {
  state = {
    data: [
      {
        label: 'Hello',
        important: false,
        like: false,
        id: 1,
      },
      {
        label: "I'm a React App",
        important: false,
        like: false,
        id: 2,
      },
      {
        label: 'Click me to like',
        important: false,
        like: false,
        id: 3,
      },
    ],
    term: '',
    filter: 'all',
  }

  maxId = 4

  changeImportant = (id) => {
    let data = [...this.state.data]

    let item = data.find((item) => item.id === id)
    item.important = !item.important

    this.setState({ data })
  }

  deleteItem = (id) => {
    let data = [...this.state.data]

    let index = data.findIndex((item) => item.id === id)

    const newData = [
      ...data.slice(0, index),
      ...data.slice(index + 1),
    ]

    this.setState({ data: newData })
  }

  changeLike = (id) => {
    let data = [...this.state.data]

    let item = data.find((item) => item.id === id)
    item.like = !item.like

    this.setState({ data })
  }

  changeFilter = (filter) => {
    this.setState({ filter })
  }

  addPost = (label) => {
    let data = [...this.state.data]

    const newItem = {
      label: label,
      important: false,
      like: false,
      id: this.maxId++,
    }

    data.push(newItem)

    this.setState({ data })
  }

  searchPost = (term) => {
    this.setState({ term })
  }

  search(posts, term) {
    return posts.filter((post) =>
      post.label.toLowerCase().includes(term.trim().toLowerCase())
    )
  }

  filterPost(posts, filter) {
    if (filter === 'all') {
      return posts
    }

    return posts.filter((post) => post.like)
  }

  render() {
    const likedCount = this.state.data.filter(
      (post) => post.like
    ).length
    const allPostsCoute = this.state.data.length

    const visiblePosts = this.filterPost(
      this.search(this.state.data, this.state.term),
      this.state.filter
    )

    return (
      <div className="app">
        <Header liked={likedCount} allPosts={allPostsCoute} />
        <div className="search-filter-panel">
          <SearchPanel searchPost={this.searchPost} />
          <PostFilter
            changeFilter={this.changeFilter}
            filter={this.state.filter}
          />
        </div>
        <PostList
          items={visiblePosts}
          changeImportant={this.changeImportant}
          deleteItem={this.deleteItem}
          changeLike={this.changeLike}
        />
        <PostAddForm addPost={this.addPost} />
      </div>
    )
  }
}
