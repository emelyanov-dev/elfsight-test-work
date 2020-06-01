import React from "react";
import {Link} from "react-router-dom";
import './card.scss';

function Card({to, img, title, description}) {
  return (
    <Link to={to} className="card">
      <div className="card__body">
        <img src={img} alt="" className="card__img"/>
        <h3 className="card__title">{title}</h3>
      </div>
      <h3 className="card__description">{description} фотографий</h3>
    </Link>
  )
}

export default Card