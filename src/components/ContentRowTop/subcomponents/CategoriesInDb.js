import React, {Component} from "react";

class CategoriesInDb extends Component {
    
	constructor(){
		super();

		this.state = {
			categoriesList : []
		}	
	}

	componentDidMount(){
		const url ="http://localhost:5000/api/products";
		fetch(url)
		    .then( (response)=>response.json() )
			.then( (data) => {
				this.setState({categoriesList: data.data.product_categories});	
				
			})
			.catch( (error) => console.error(error))
	}

	onMouseOverHandler = (e)=> {
		e.target.parentElement.nextElementSibling.classList.add("bg-secondary")
	}




    mapper = (category, index) => ( 

		<div className="col-lg-6 mb-4" key={category.category+index}>
							<div className="card bg-dark text-white shadow">
								<div className="card-body">
									{category.category}
								</div>
							</div>
						</div>

	)



    render(){
       
	    return (
		  <div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 
					   className="m-0 fon<t-weight-bold text-gray-800 categories"
					   onMouseOver={this.onMouseOverHandler}
					   >
						Categories in Data Base
						</h5>
				</div>
				<div className="card-body">
					<div className="row">
						{
                           this.state.categoriesList.map( (this.mapper))
						}

						
						

					</div>
				</div>
			</div>
		  </div>
	)
  }
}


export default CategoriesInDb;