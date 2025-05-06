import React, { useState } from 'react';
import "./qualification.css";

function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualificação</h2>
        <span className="section__subtitle">Jornada Pessoal</span>
    
        <div className="qualification__container container">
            <div className="qualification__tabs"> 
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Aprendizado
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experiência
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Técnico em Mecatrônica</h3>
                            <span className="qualification__subtitle">COTIP - Colégio Tec. de Piracicaba</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2015 - 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                             <h3 className="qualification__title">Sistemas de Informações</h3>
                            <span className="qualification__subtitle">UNIMEP - Universidade de Piracicaba</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2019
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Sistemas de Informações</h3>
                            <span className="qualification__subtitle">UDF - Centro Universitário do DF</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">.NET | Angular</h3>
                            <span className="qualification__subtitle">Udemy/Youtube</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Presente
                            </div>
                        </div>

                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BI & Suporte</h3>
                            <span className="qualification__subtitle">Aneel - Agência Nacional de Energia Elétrica</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web Developer & Suporte</h3>
                            <span className="qualification__subtitle">MAPA - Ministério da Agricultura, Pecurária e Abastecimento</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Freelancer Developer</h3>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Developer</h3>
                            <span className="qualification__subtitle">NWI Telecom</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2024 - Presente
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Qualification
