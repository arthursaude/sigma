import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export class DataTableDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],

			customers: null,
			selectedCustomers: null,
			globalFilter: null,
			selectedRepresentatives: null,
			dateFilter: null,
			selectedStatus: null
		};
	}

	componentDidMount() {
		console.log("Teste mount");
		fetch("http://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((result) => {
			this.setState({ products: result });
		});
	}

	render() {
		return (
			<div>
				{/* <h1>teste</h1> */}
				<DataTable
					selection={this.state.selectedCustomers}
					onSelectionChange={(e) => this.setState({ selectedCustomers: e.value })}
					rowHover
					value={this.state.products}
					resizableColumns
					columnResizeMode="fit"
					paginator
					rows={10}
					totalRecords={this.state.totalRecords}
					className="p-datatable-customers"
					rowsPerPageOptions={[ 5, 10, 25, 50 ]}
				>
					<Column field="userId" header="Code" sortable />
					<Column field="id" header="Name" sortable />
					<Column field="title" header="Category" sortable />
					<Column field="body" header="Quantity" sortable />
				</DataTable>
			</div>
		);
	}
}
