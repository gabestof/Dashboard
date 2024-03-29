import React from 'react'
import PropTypes from 'prop-types'

function Card(props){

    return(
        <div className="col-md-4 mb-4">
        <div className={"card border-left-"+props.color+" shadow h-100 py-2"}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
                    </div>
                    <div className="col-auto">
                        <i className={"fas "+props.icon+" fa-2x text-gray-300"}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

Card.defaultProps = {
    title: "Movie without title",
    color: "danger",
    number: "0",
    icon:"fas fa-film fa-2x text-gray-300"
}


Card.propTypes= {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    //number: PropTypes.array.isRequired,
    icon: PropTypes.oneOf(["fa-book", "fa-object-group", "fa-user"])
}



export default Card