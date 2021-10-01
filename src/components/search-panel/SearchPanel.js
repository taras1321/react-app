import './search-panel.scss'

const SearchPanel = (props) => {
  function onChange(event) {
    props.searchPost(event.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Пошук по записах"
      onChange={onChange}
    />
  )
}

export default SearchPanel
