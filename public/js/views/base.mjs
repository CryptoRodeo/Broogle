export const elements = {
	parentSearchContainer: document.querySelector('#search'),
	searchForm: document.querySelector('#searchForm'),
	searchInput: document.querySelector('#search__field'),
	searchResults: document.querySelector('#resultsContainer'),
	searchResultList: document.querySelector("#results-list"),
    searchResultListElements: document.querySelector("#results-list li"),
    likedOverlay: document.querySelector("#likeOveray"),
    likeList: document.querySelector("#likeList"),
    saveBrewery: document.querySelectorAll(".save__brewery")
}

/**
 * Holds classes used in this file.
 */
export const elementStrings = {
    loader: 'loader',
    pointer: 'pointer'
};

/**
 * 
 * The parent is passed and then the loader is attached as a child element of the parent. 
 * 
 * This allows the keyword 'this' to be attached different UI elements
 * 
 */

export const renderLoader = parent => {
    //The raw HTML of the loader
    const loader = `
        <div class="${elementStrings.loader}">
            <i class="fas fa-spinner"></i>
        </div>
    `;
    //Insert right after the beginning of parent.
    parent.insertAdjacentHTML('beforeend', loader);
};

//Clears the loader from the menu.
export const clearLoader = () => {
    //Get the loader from the HTML
    const loader = document.querySelector(`.${elementStrings.loader}`);
    //If the loader exists, select its parent element, remove the child which is loader.
    if (loader) loader.parentElement.removeChild(loader);
};

export const renderPointer = parent =>
{
    const pointer =
    `
        <div class="${elementStrings.pointer}">
            <i class="fas fa-angle-double-down"></i>
        </div>
    `;

    parent.insertAdjacentHTML('beforeend',pointer);
};


//Clears the loader from the menu.
export const clearPointer = () => {
    //Get the loader from the HTML
    const pointer = document.querySelector(`.${elementStrings.pointer}`);
    //If the loader exists, select its parent element, remove the child which is loader.
    if (pointer) pointer.parentElement.removeChild(pointer);
};

export const test = console.log('in the base module');