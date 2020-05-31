import React from "react";
import './modal.scss';

export default function ({showed, photo, onPrev, onNext, onClose}) {
  return (
    <div className={`modal ${showed ? 'modal_showed' : 'modal_hidden'}`}>
      <div className="modal__dialog">
        <img src={photo && photo.url} alt="" className="modal__img"/>
        <button className="modal__prev" onClick={onPrev}> -</button>
        <div className="modal__title">{photo && photo.title}</div>
        <button className="modal__next" onClick={onNext}> +</button>
        <button className="modal__close" onClick={onClose}>x</button>
      </div>
    </div>
  )
}