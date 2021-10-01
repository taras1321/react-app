import { Component } from 'react'
import './post-add-form.scss'

export default class PostAddForm extends Component {
  state = {
    value: '',
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addPost(this.state.value)
    this.setState({ value: '' })
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form className="add-post" onSubmit={this.onSubmit}>
        <input
          required
          onChange={this.onChange}
          type="text"
          placeholder="Про що ви зараз думаєте?"
          value={this.state.value}
        />
        <button type="submit">Додати</button>
      </form>
    )
  }
}
