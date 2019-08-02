import {elements} from './base.mjs';
import {isDark} from './changeMode.mjs';
import {toggleConfigModal} from './config.mjs';



//Returns the value inputted into the search bar.
export const getInput = () => elements.searchInput.value;


// export const applyFilter = () => {
//     elements.filter_buttons.forEach( el => {
//         el.onclick = () => alert(el.value);
//     })
// }

// applyFilter();
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

    if(document.querySelector(`.save__brewery[href="#${id}"]`)){
        document.querySelector(`.save__brewery[href="#${id}"]`).classList.add('save__brewery--active');
    }
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
    if(breweries.length == 0)
    {
        elements.searchResults.style.display = 'none';
        document.querySelector('#noResultsContainer').style.display = 'block';
    }
    else
    {
        elements.searchResults.style.display = 'block';
        document.querySelector('#noResultsContainer').style.display = 'none';
        breweries.slice().forEach(renderBrewery);
    }
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