import React from "react"
import ContentRowProducts from '../ContentRowProducts/ContentRowProducts'
import LastProductInDb from './subcomponents/LastProductInDb'
import CategoriesInDb from "./subcomponents/CategoriesInDb"

const url ="http://localhost:5000/api/products";

let propiedad ={};


fetch(url)
.then( (response)=>response.json() )
.then( (data) => {
    console.log(data.data.lastest.product_images[0].image)
    propiedad= data.data.lastest
})


function ConetentRowTop() {

	return (

<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

				    <ContentRowProducts />
					
					<div className="row">
					
						<LastProductInDb 
						  product_name={propiedad.product_name}
						  description={propiedad.description}
						 />

						<CategoriesInDb />
					</div>
				</div>

)
}

export default ConetentRowTop;