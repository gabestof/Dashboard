import React from "react";
import Card from './subcomponents/Card'


const url1="http://localhost:5000/api/products";
const url2="http://localhost:5000/api/users";

let numberProducts = [];
let numberCategories = [];
let numberUsers = [];

fetch(url1)
.then( (response)=>response.json() )
.then( (data) => {
    console.log(data.data)
    numberProducts= (data.data.products).length
})

fetch(url1)
.then( (response)=>response.json() )
.then( (data) => {
    numberCategories= (data.data.product_categories).length

})

fetch(url2)
.then( (response)=>response.json() )
.then( (data) => {
    numberUsers= (data.data.users).length
   
})


function ContentRowProducts() {


    let row = [{
        title: "Total de Productos",
        color: "primary",
        number: numberProducts,
        icon: "fa-book"
    },
    {
        title: "Total de Categorias",
        color: "success",
        number: numberCategories,
        icon: "fa-object-group"
    },
    {
        title: "Total de Usuarios",
        color: "warning",
        number: numberUsers,
        icon: "fa-user"

    }
    ]

    const mapper = (value, i) => (
        < Card 
                key ={value.title+i} 
                title={value.title}
                color={value.color}
                number={value.number}
                icon={value.icon}
              
         />
    )
    return (
        <div className="row">
           { Array.isArray(row) && row.map(mapper) }
        </div>
    )
}





export default ContentRowProducts;