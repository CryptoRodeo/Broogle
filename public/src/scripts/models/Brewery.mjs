import {getById} from '../config.js';

export default class Brewery
{
	constructor(id)
	{
		this.id = id;
	}

	async getInfo()
	{
		try {
			this.info = await fetch(`${getById}${this.id}`)
			.then( data => data.json())
			.then( res => 
				{
					return res;
				});
			}
		catch(e) {
			console.log(e);
		}
	}

	//Used for testing
	// printProps()
	// {
	// 	console.log(this.name);
	// 	console.log(this.brewery_type);
	// 	console.log(this.street);
	// 	console.log(this.city);
	// 	console.log(this.state);
	// 	console.log(this.postal_code);
	// 	console.log(this.phone);
	// 	console.log(this.website_url);
	// }

};