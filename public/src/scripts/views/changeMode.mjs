import {elements} from './base.mjs';



 export const toggleDynamicElements = () => {
     //An actual selector is needed in order to reference dynamic elements.
    document.querySelectorAll('.info-container').forEach( el => {
        el.classList.toggle('light');
        el.classList.toggle('--dark-mode');
    });

    console.log(document.querySelectorAll('.info-container'));
    console.log(elements.infoContainer);
 }

 //If the body and html elements are in dark mode.
 export const isDark = () => {
     
    if(elements.htmlDoc.classList.contains('--dark-mode') || elements.docBody.classList.contains('--dark-mode'))
    {
        return '--dark-mode'
    }
    else
    {
        return 'light'
    }
 }
export let alternateMode = () => {
    elements.changeMode.onclick = () => {
            elements.htmlDoc.classList.toggle('--dark-mode');
            elements.docBody.classList.toggle('--dark-mode');
            elements.searchResultList.classList.toggle('--dark-mode_results');
            elements.heart.classList.toggle('--dark-heart');
            elements.likedOverlay.classList.toggle('--dark-mode');
            elements.likedOverlay.classList.toggle('--force-dark');

            //Had to force this element to have this style due to css filters.
            if(elements.likedOverlay.classList.contains('--force-dark'))
            {
                elements.likedOverlay.style.backgroundColor = '#2E3238';
            }
            else
            {
                elements.likedOverlay.style.backgroundColor='#fff';
            }
            //Toggles all the dynamic list elements.
            toggleDynamicElements();
            isDark();
        }
};