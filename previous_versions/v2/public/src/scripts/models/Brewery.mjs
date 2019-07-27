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
				// this.name = res.name,
				// this.brewery_type = res.brewery_type,	
				// this.street = res.street,
				// this.city = res.city,
				// this.state = res.state,
				// this.postal_code = res.postal_code,
				// this.phone = res.phone,
				// this.website_url = res.website_url);
			}
		catch(e) {
			// error statements
			console.log(e);
		}
	}

	printProps()
	{
		console.log(this.name);
		console.log(this.brewery_type);
		console.log(this.street);
		console.log(this.city);
		console.log(this.state);
		console.log(this.postal_code);
		console.log(this.phone);
		console.log(this.website_url);
	}

};