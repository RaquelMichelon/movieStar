import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
          <nav className="container">
              <div className="moviestar-nav-content">
                  <h1>MovieSTAR</h1>
                  <a href="https://github.com/RaquelMichelon" target="_blank" rel="noreferrer">
                      <div className="moviestar-contact-container">
                          <GithubIcon />
                          <p className="moviestar-contact-link">/RaquelMichelon</p>
                      </div>
                  </a>
              </div>
          </nav>
        </header>
      );
}

export default Navbar;