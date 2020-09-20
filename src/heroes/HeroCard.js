import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    first_appearance,
    characters,
    alter_ego,

}) => {
    return (
        <div className="card ms-3" style={{ maxWidth: '540px' }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> {superhero}</h5>
                        {
                            (alter_ego !== characters) && <p className="card-text"> {characters}</p>
                        }
                        <p className="card-text"> {first_appearance}</p>

                        <Link to = {`./hero/${ id }`}> mas...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
