import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/* We are using backticks so we can use template literals [Syntax: ${}] inside a string. Template literals are used for various purposes but here we are using them to store variables in a string. In this case, we have used $ to use props.mode as a variable and the curly brackets to specify that this is a JavaScript Code. */}
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.abouttext}</Link>
                                <a className="nav-link" href="/about">{props.abouttext}</a>
                            </li> */}
                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abouttext: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Set Title Here',
    abouttext: 'About Text Here'
};