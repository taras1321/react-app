import './header.scss'

const Header = (props) => {
  return (
    <div className="header">
      <h1>React App</h1>
      <h2>
        {props.allPosts} записа з них сподобалося {props.liked}
      </h2>
    </div>
  )
}

export default Header
