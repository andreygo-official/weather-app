
import { NavLink } from "react-router-dom"
import './transition.style.css'
const TransitionContainer = ({ section, article }) => {
  if (article) {
    return (
      <div className='container'>
        <div className='sections'>
          <NavLink className='nav me-2' to='/'>Home</NavLink>{' '}
          <span className="text-white">→</span>
          <NavLink className='ms-2 me-2 nav' to='/news'> News</NavLink>{' '}
          <span className='current-section'>→ {article.title}</span>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className='container'>
      <div className='sections'>
        <NavLink className='nav me-2' to='/'>Home</NavLink>{' '}
        <span className="text-white">→</span>
        <span className='current-section ms-2'>{section}</span>
      </div>
    </div>
    )
  }

}

export default TransitionContainer
