import './header.style.css'
import weatherLogo from '../Images/weather-logo.png'
import { NavLink } from "react-router-dom"
export const Header = () => {
    return (
        <div className="header-container">
            <nav className="navbar navbar-expand-lg bg-body-dark">
                <div className="container-fluid">
                    <img className="navbar-brand" src={weatherLogo} alt='logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="info-links collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <NavLink to={'/'}>
                                {({ isActive }) => (
                                    <button className={isActive? 'active' : ''}>Home</button>
                                )}
                           </NavLink>
                           <NavLink to={'/news'}>
                                {({ isActive }) => (
                                    <button className={isActive? 'active' : ''}>News</button>
                                )}
                           </NavLink>
                           <NavLink to={'/photos'}>
                                {({ isActive }) => (
                                    <button className={isActive? 'active' : ''}>Photos</button>
                                )}
                           </NavLink>
                           <NavLink to={'/contact'}>
                                {({ isActive }) => (
                                    <button className={isActive? 'active' : ''}>Contact</button>
                                )}
                           </NavLink>
                            </ul>
                        </div>
                    </div>
            </nav>
        </div>
    )
}

