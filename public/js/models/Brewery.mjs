import {getById} from '../config';

export default class Brewery
{
	constructor(id)
	{
		this.id = id;
	}

	async getInfo()
	{
		try {
			fetch(`${getById}${this.id}`)
			.then(data => data.json())
			.then(res => 
				this.name = res.name,
				this.brewery_type = res.brewery_type,	
				this.street = res.street,
				this.city = res.city,
				this.state = res.state,
				this.postal_code = res.postal_code,
				this.phone = res.phone,
				this.website_url = res.website_url);
		} catch(e) {
			// error statements
			console.log(e);
		}
	}

}