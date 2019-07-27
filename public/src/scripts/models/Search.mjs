
import {ToggleFilter} from '../config.js'


export default class Search
{
	constructor(query)
	{
		this.query = query;
	}

	async getResults()
	{
		try {
			this.result = await fetch(`${ToggleFilter()}${this.query}`)
			.then(data => data.json()) //Format it into json
			.then(res =>{
				return res;
				});
		} catch(e) {
			// statements
			console.log(e);
		}
		console.log(this.result);
	}
}