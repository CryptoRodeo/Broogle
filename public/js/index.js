/**
	App Controller
**/
import { elements, renderLoader, clearLoader, renderPointer, clearPointer } from './views/base.mjs';

//Models
import Search from './models/Search.mjs';
import Likes from './models/Likes.mjs';
import Brewery from './models/Brewery.mjs';

//views
import * as searchView from './views/searchView.mjs';
import * as likesView from './views/likesView.mjs';


const state = {};

//SEARCH Controller

const controlSearch = async() => {
	//get query from search view
	const query = searchView.getInput();

	//if there is a value
	if(query)
	{
		clearPointer();
		state.search = new Search(query);
		searchView.clearInput();
		searchView.clearResults();


		renderLoader(elements.parentSearchContainer);

		//Get the data from the API
		try {
			await state.search.getResults();
			clearLoader();

			renderPointer(elements.parentSearchContainer);

			console.log(state.search.result);
			searchView.renderResults(state.search.result);
			//If promise returned:
		} catch(e) {
			alert("Something went wrong!\n" + e);
			// statements
			console.log(e);
		}
	}
	
}

/**
 * Brewery controller
 */
const controlBrewery = async () => {
	localStorage.clear();
	const id = window.location.hash.replace('#','');
	
	if (id)
	{
		if(state.search) searchView.highlightSelected(id);
		state.brewery = new Brewery(id);

		

		try
		{
			await state.brewery.getInfo();
			controlLike();

			console.log(state.likes);
		}
		catch(err)
		{
			console.log(err);
		}
	}
};

['hashchange','load'].forEach(event => window.addEventListener(event, controlBrewery));

/**
 * Like Controller
 */

 const controlLike = () =>
 {
	 if(!state.likes) state.likes = new Likes();

	 //Store the current ID focused.
	 const currentID = state.brewery.id;

	 if(!state.likes.isLiked(currentID))
	 {

		let address = (`${state.brewery.info.street} ${state.brewery.info.city}, ${state.brewery.info.state} ${state.brewery.info.postal_code}`);
		 //Add like to the state
		 const newLike = state.likes.addLike(
			 currentID,
			 state.brewery.info.name,
			 address,
			 state.brewery.info.phone
		 );

	 }
 }

 window.addEventListener('load', () => {
	 state.likes = new Likes();
	 state.likes.readStorage();	 
 });


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});