import React from "react";
import CommonButton from "../../Buttons/CommonBotton";
import Image from '../../../assets/imagesN/products/exampleOtrosLapiceras.jpeg'


function LastProductInDb(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last Product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={Image} alt="Producto_1" />
                    </div>
                    <p>{props.product_name}</p>
                    <p>{props.description}</p>
                    <CommonButton 
                       text="Ver más detalles"
                       href="/detalles"
                       color="primary"
                    />
                      
                </div>
            </div>
        </div>

    )
}

export default LastProductInDb;