import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
       <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">#Caick Tanan</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#portifolio" className="footer__link">Projetos</a>
                </li>
            </ul>

            <div className="footer__social">

                <a href="https://www.linkedin.com/in/caick-tanan-03086b180/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://github.com/caick-tanan" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
                </a>

                <a href="mailto:caick_tanam@gmail.com" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="bx bxl-gmail"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Caick Tanan Almeida. Todos os direitos reservados.</span>
        </div>
       </footer>
    </div>
  )
}

export default Footer
