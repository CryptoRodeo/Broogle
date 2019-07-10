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


//Change from light to dark theme.
import {alternateMode} from './views/changeMode.mjs';
//Used for light/dark mode.
alternateMode();

// likesView.toggleLikeMenu();
// likesView.renderLike();


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
	const id = window.location.hash.replace('#','');
	
	if (id)
	{
		if(state.search) searchView.highlightSelected(id);
		state.brewery = new Brewery(id);

		console.log(state);
		
		try
		{
			await state.brewery.getInfo();
			controlLike();
 
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

 const controlLike = () => {
	 if(!state.likes) state.likes = new Likes();

	 //Store the current ID focused.
	 const currentID = window.location.hash.replace('#','');

	 //User has not liked current brewery, but is liking it now.
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

		//Add like to the like page:
		likesView.renderLike(newLike);
	}
	//User is deleting the liked brewery
	else
	{
		likesView.deleteLike(currentID);
		state.likes.deleteLike(currentID);
	}
	likesView.toggleLikeMenu();
};

 window.addEventListener('load', () => {
	 state.likes = new Likes();
	 state.likes.readStorage();	 

	 //Toggle the like menu
	 likesView.toggleLikeMenu();

	 state.likes.likes.forEach(el => {
		 likesView.renderLike(el);
	 });
 });

// /**
//  * LIST Controller
//  */

//  const controlList = () =>
//  {
// 	//create a new list IF there is none.
// 	 if(!state.list) state.list = new List();

// 	 //Add each brewery to the list and UI



//  }

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault(); //prevents page from refreshing.
    controlSearch();
});

// if(document.querySelector('.delete__brewery'))
// {
// 	document.querySelector('.delete__brewery').addEventListener('click', console.log("Hello!"));
// }
