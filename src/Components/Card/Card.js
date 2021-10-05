import React from 'react';
import './Card.css';
const card = (props) => {

    const { name, title, speciality, img, cost } = props.course;
    return (
        <div className="col">
            <div className="card text-center border border-warning">
                <img src={img} className="card-img-top w-100 img"
                    alt="" />
                <div className="card-body">
                    <h5 className="card-title text-danger">{name}</h5>
                    <h4>{title}</h4>
                    <p className="card-text text-white">{speciality}</p>
                    <p className="text">${cost}</p>
                    <button className="btn-primary">Proceed Now</button>
                </div>
            </div>

        </div>
    );
};

export default card;