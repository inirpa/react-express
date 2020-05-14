const express = require('express');
const app = express();
const port = 5000;

app.listen(port, ()=> console.log(`sever started on ${port}`));

app.get('/api/customers', (request, response) => {
	const customers = [
	{
		id: 1,
		firstName: 'Nirpa',
		lastName: 'Rai'
	},
	{
		id: 2,
		firstName: 'Rax',
		lastName: 'Tex'
	},
	{
		id: 3,
		firstName: 'Jacy',
		lastName: 'Kale'
	},
	{
		id: 4,
		firstName: 'Jones',
		lastName: 'Mane'
	}
	];

	response.json(customers);
});