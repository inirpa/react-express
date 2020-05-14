import React from 'react';
import './customers.css';

class Customers extends React.Component {
	constructor(){
		super();
		this.state = {
			customers: []
		}
	}

	componentDidMount(){
		fetch('/api/customers')
			.then(response => response.json())
			.then(customers => this.setState({customers}, () => console.log('Customers fetched', customers)));
	}

	render(){
		return (
			<div>
				<h2>Customers</h2>
				<ul>
					{this.state.customers.map
						(customer =>
							<li key={customer.id}>#{customer.id} {customer.firstName} {customer.lastName}</li>
						)
					}
				</ul>
			</div>
		);
	}
}

export default Customers;