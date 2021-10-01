import './post-list-item.scss'

const PostListItem = (props) => {
  return (
    <>
      <span onClick={props.changeLike}>{props.label}</span>
      <div className="icons">
        <button onClick={props.changeImportant}>
          <i className="fa fa-star star"></i>
        </button>
        <button onClick={props.deleteItem}>
          <i className="far fa-trash-alt trash"></i>
        </button>
        <i className="fa fa-heart heart"></i>
      </div>
    </>
  )
}

export default PostListItem
