import React from "react";
import './user.scss';
import {Link} from 'react-router-dom';

export default function User({name, username, onClick, selected, id}) {
    return (
        <Link to={`/users/${id}`} className={`user ${selected && selected ? 'user_active' : ''}`} onClick={onClick}>
            <div className="user__body">
                <div className="user__fullName">{name}</div>
                <div className="user__name">@{username}</div>
            </div>
        </Link>
    )
}