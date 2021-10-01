import { Component } from 'react'
import './post-filter.scss'

export default class PostFilter extends Component {
  state = {
    btnAllClasses: ['btn', 'btn-all', 'active'],
    btnLikeClasses: ['btn', 'btn-like'],
  }

  clikLike() {
    this.setState({
      btnAllClasses: ['btn', 'btn-all'],
      btnLikeClasses: ['btn', 'btn-like', 'active'],
    })

    this.props.changeFilter('like')
  }

  clickAll() {
    this.setState({
      btnAllClasses: ['btn', 'btn-all', 'active'],
      btnLikeClasses: ['btn', 'btn-like'],
    })

    this.props.changeFilter('all')
  }

  render() {
    return (
      <div className="bts">
        <button
          onClick={this.clickAll.bind(this)}
          className={this.state.btnAllClasses.join(' ')}
        >
          Всі
        </button>
        <button
          onClick={this.clikLike.bind(this)}
          className={this.state.btnLikeClasses.join(' ')}
        >
          Сподобалися
        </button>
      </div>
    )
  }
}
