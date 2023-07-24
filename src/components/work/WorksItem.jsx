import React from 'react'

const WorksItem = ({item}) => {
  return (
   <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <p className="text__description">{item.text}</p>
        <a href="https://github.com/caick-tanan?tab=repositories"  target="_blank" rel="noreferrer" className="work__button">Código{item.codigo}<i className="bx bx-right-arrow-alt work__button-icon"></i></a>
   </div>
  );
}

export default WorksItem
