import React from 'react'

const CardApi = ({image, title, description, price}) => {
    return (
        <div className="container">
            <div className="card">
            <img className="card-img-top" src={image} alt="Card cap"></img>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">{price}</a>
             </div>
            </div>
        </div>
    )
}

export default CardApi
