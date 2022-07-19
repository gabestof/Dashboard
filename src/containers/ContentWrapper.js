import React from "react"
import TopBar from '../components/TopBar/TopBar'
import ConetentRowTop from "../components/ContentRowTop/ContentRowTop";
import Footer from "../components/Footer/Footer"
import Table from "../components/Table/Table"


class ContentWrapper extends React.Component {

	constructor() {
		super();
		this.state = {
			productList: [],
			tableColumns: []
		}

	}

	componentDidMount() {
		const url ="http://localhost:5000/api/products";
		fetch(url)
		    .then( (response)=>response.json() )
			.then( (data) => {
				//console.log("hola2", data.data.productsTable)
			let columns = ["product_id", "product_name", "description", "category"];
			this.setState({productList: data.data.productsTable[0], tableColumns: columns});
		})
		.catch( (error) => console.error(error))

	}


	render() {

		return (

			<div id="content-wrapper" className="d-flex flex-column">
	
				<div id="content">
	
					<TopBar />
					
					<ConetentRowTop />
	
					<Table  data={this.state.productList} columns={this.state.tableColumns}/>
					
				</div>
				<Footer />
		 </div>
	
		)
	}
	}
	
export default ContentWrapper;