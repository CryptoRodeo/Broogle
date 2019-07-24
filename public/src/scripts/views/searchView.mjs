import {elements} from './base.mjs';
import {isDark} from './changeMode.mjs';
import {toggleConfigModal} from './config.mjs';

let about = document.querySelector("#aboutLink");
let favButton = document.querySelector('.fa-heart');
let closeButton = document.querySelector("#closeLikePage");
let resultsContainer = document.querySelector("#resultsContainer");
const actionButtons = [ favButton,closeButton ];



//Returns the value inputted into the search bar.
export const getInput = () => elements.searchInput.value;


export const clearInput = () => {
	elements.searchInput.value ='';
}

export const clearResults = () => {
	elements.searchResultList.innerHTML = '';
}

export const highlightSelected = id => {
    const resultsSelected = Array.from(document.querySelectorAll('.save__brewery'));
	resultsSelected.forEach(el => {
		el.classList.remove('.save__brewery--active');
	});

	//Select the link with the href attribute holding the ID
    //Then add the class that gives it the selected styles.

    document.querySelector(`.save__brewery[href="#${id}"]`).classList.add('save__brewery--active');
    
    document.querySelectorAll('.save__brewery--active').forEach( el => {
        if(isDark())
        {
            el.style.color = '#383838';
        }
        else
        {
            el.style = "color: #eceff1;";
        }
    });
}


/**
    * The recipe object will have its attributes 
    * extracted and then put into the HTML markup.
    * 
    * The markup will then be inserted into the search results list
    * as the next result 'before end'.
 */

const renderBrewery = brewery =>
{
	const markup = `
			<li>
                <a class="results__link">
                    <div class="info-container ${isDark()}">
                        <h1 class="lightblue"><a href="">${brewery.name}</a></h1>
                        <h2>Address: ${brewery.street} ${brewery.city}, ${brewery.state} ${brewery.postal_code}</h2>
                        <h3>Phone#: ${brewery.phone}</h3>
                        <h3 class="lightblue"><a href="">Get Directions</a></h3>
                        <a class="save__brewery" href="#${brewery.id}">Save</a>
                    </div>
                </a>
            </li>
    `
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}



export const renderResults = (breweries) => {

    
    // render results of currente page
    //The starting and ending page.
    // const start = (page - 1) * resPerPage;
    // const end = page * resPerPage;

    /**
     * Example:
     * If the page by default is 1, the start index
     * for the slice will be 0
     * 
     * The end will be the page number (default to 1)
     * times the number of results per page (default to 10);
     * 
     *  Take 10 of the recipes from the recipes array, pass them
     *  into the renderRecipe function.
     */
    
    document.querySelector('#resultsContainer').style.display = 'block';
    breweries.slice().forEach(renderBrewery);

    // render pagination buttons
    //renderButtons(page, recipes.length, resPerPage);
};

//IIFE that toggles the about-me page

//Refactor this into its own module
// (() =>
// {
//     let about = document.querySelector("#aboutLink");
//     about.onclick = function()
//     {
//         document.querySelector("#aboutOverlay").classList.toggle("show");
//         if(document.querySelector("#aboutOverlay").classList == "overlay show")
//         {
//             about.textContent='';
//             favButton.style.display="none";
//             about.insertAdjacentHTML('afterbegin','<i class="far fa-times-circle"></i>');
//         }
//         else
//         {
//             about.textContent = 'About';
//             favButton.style.display="inline-block";
//         }
//     }
// })();

toggleConfigModal();

//Alternates between light or dark mode.
// alternateMode();
// (function()
// {
//     actionButtons.forEach(el => {
//         el.onclick = function()
//         {
//             document.querySelector("#likeOverlay").classList.toggle("show");
//             if(document.querySelector("#likeOverlay").classList == 'overlay show')
//             {
//                 about.textContent='';
//             }
//             else
//             {
//                 about.textContent = 'About';
//                 favButton.innerHTML = '<img src="/assets/fav-heart.png">';
//             }
//         }
//     })
// })();