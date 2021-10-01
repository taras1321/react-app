import './post-list.scss'
import PostListItem from '../post-list-item/PostListItem'

const PostList = (props) => {
  const items = props.items.map((item) => {
    const cls = ['list-item']
    if (item.important) {
      cls.push('important')
    }
    if (item.like) {
      cls.push('like')
    }
    return (
      <li className={cls.join(' ')} key={item.id}>
        <PostListItem
          label={item.label}
          important={item.important}
          like={item.like}
          key={item.key}
          changeImportant={() => props.changeImportant(item.id)}
          deleteItem={() => props.deleteItem(item.id)}
          changeLike={() => props.changeLike(item.id)}
        />
      </li>
    )
  })
  return <ul className="app-list">{items}</ul>
}

export default PostList
