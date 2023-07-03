import React from 'react';

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">BackEnd/Arquiteturas</h3>

    <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">.NET</h3>
                    <span className="skills__level">Intermediário/Avançado</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">SQL Server</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">MVC</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">DDD</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
                </div>
        </div>
        </div>
  </div>
  )
}

export default Backend
