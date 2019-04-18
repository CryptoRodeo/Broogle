import {elements} from './base.mjs';

//Returns the value inputted into the search bar.
export const getInput = () => elements.searchInput.value;


export const clearInput = () => {
	elements.searchInput.value ='';
}

export const clearResults = () => {
	elements.searchResultList.innerHTML = '';
}

export const highlightSelected = id => {
	const resultsSelected = Array.from(document.querySelectorAll('.results__link'));
	resultsSelected.forEach(el => {
		el.classList.remove('results__link--active');
	});

	//Select the link with the href attribute holding the ID
    //Then add the class that gives it the selected styles.

	document.querySelector(`.results__link[href=#"${id}"]`).classList.add('results__link--active');
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
                    <div class="info-container">
                        <h1 class="lightblue"><a href="">${brewery.name}</a></h1>
                        <h2>Address: ${brewery.street} ${brewery.city}, ${brewery.state} ${brewery.postal_code}</h2>
                        <h3>Phone#: ${brewery.phone}</h3>
                        <h3 class="lightblue"><a href="">Get Directions</a></h3>
                        <h3 class="lightblue"><a href="">Save</a></h3>
                    </div>
                </a>
            </li>
	`
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}


export const renderResults = (breweries, page = 1, resPerPage = 10) => {
    // render results of currente page
    //The starting and ending page.
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

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
    breweries.slice(start, end).forEach(renderBrewery);

    // render pagination buttons
    //renderButtons(page, recipes.length, resPerPage);
};

(function()
{
    var about = document.querySelector("#aboutLink");
    about.onclick = function()
    {
        document.querySelector("#overlay").classList.toggle("show");
        if(document.querySelector("#overlay").classList == 'show')
        {
            about.textContent='';
            about.insertAdjacentHTML('afterbegin','<i class="far fa-times-circle"></i>');
        }
        else
        {
            about.textContent = 'About';
        }
    }
})();   