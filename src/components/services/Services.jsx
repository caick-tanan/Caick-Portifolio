import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Serviços</h2>
        <span className="section__subtitle">Tipos de Serviços</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i class='bx bx-window-alt services__icon'></i>
                    <h3 className="services__title">
                        Web <br /> Developer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>Leia mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web Developer</h3>
                        <p className="services__modal-description">Full Stack</p>
                        
                        <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento técnico e visual de páginas web.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Documentação e manutenção do software.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Definição de linguagens para FrontEnd e BackEnd.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Construção de API.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Funcionamento operacional/Deploy.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Entre Outros...</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            
            <div className="services__content">
                <div>
                    <i class='bx bx-devices services__icon'></i>
                    <h3 className="services__title">
                        Mobile <br/> Developer
                    </h3>
                </div>

                <span className="services__button"  onClick={() => toggleTab(2)}>Leia mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Mobile Developer</h3>
                        <p className="services__modal-description">Full Stack</p>
                        
                        <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento técnico e visual de dispositivos móveis.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Documentação e manutenção do software.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Definição de linguagens para FrontEnd e BackEnd.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Construção de API.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Funcionamento operacional/Deploy.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Entre Outros...</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Services