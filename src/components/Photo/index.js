import React from "react";
import './photo.scss';

export default function ({img, title, onClick}) {
    return (
        <div className="photo" onClick={onClick}>
            <img src={img} alt={title} className="photo__img"/>
        </div>
    )
}