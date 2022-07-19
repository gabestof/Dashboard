import React from "react";
import Row from "./subcomponents/Row";


function Table({data= [], columns = []}) {

 


        const mapper = (product, index) => (
            <Row
               product={ product}
               columns = { columns}
               key={product.product_id+index+"Gab"}
            />   
        )


    return (

        <table className="table">
            <thead>
                <tr>
                   {columns.map( (encabezado, index) => <th key={index + encabezado}>{encabezado}</th>)}
                </tr>
            </thead>

            <tbody>
             { data.map(mapper) }
            </tbody>
        </table>

    )
}

export default Table;