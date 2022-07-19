import React from "react";


function Row({product, columns}) {
    


    return (
        <tr>
            { columns.map( (key, index) => <td key={key + index +"Bes"}>{ typeof product[key] == "undefined" ? "" : product[key]}</td>)}
          
      </tr>
    )
}

export default Row;