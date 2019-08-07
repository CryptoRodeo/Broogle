/**
 * This file handles all the configuration such as search query filtering
 */

//by state
import {elements} from './views/base.mjs';
export const filters = {
    current: 'by_state',
    by_city: 'by_city',
    by_state:'by_state',
    by_name: 'by_name',
    by_type: 'by_type',
    by_tag: 'by_tag'
}


export const ToggleFilter = () => {
    const getByFilter = `https://api.openbrewerydb.org/breweries?${filters.current}=`;
    elements.filter_buttons.forEach( el => {
        el.onclick = () => {
            let filterType = filters[el.value].slice(3);
            toggleSearchInput(filterType);
            filters.current = filters[el.value];
        }
    });
    return getByFilter;
};
ToggleFilter();

const toggleSearchInput = (filterType) => {
    if(filterType == 'name')
    {
        elements.searchInput.placeholder = `Type in the ${filterType} of the brewery.`;
    }
    else if (filterType == 'type')
    {
        elements.searchInput.placeholder = `Type in the ${filterType} of brewery you're looking for.`;
    }

    else if (filterType == 'tag')
    {
        elements.searchInput.placeholder = `Search for breweries using ${filterType}s.`;
    }
    else
    {
        elements.searchInput.placeholder = `Type in your ${filterType} to find breweries near you. 🍺`;
    }
}

export const getById    = 'https://api.openbrewerydb.org/breweries/';