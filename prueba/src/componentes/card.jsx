import React from 'react'

const CardApi = ({image, title, description, price}) => {
    return (
        <div>
            <div>
            <div className="card" style="width: 18rem;">
            <img className="card-img-top" src={image} alt="Card image cap"></img>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a className="btn btn-primary">{price}</a>
             </div>
            </div>
        </div>
        </div>
    )
}

export default CardApi
