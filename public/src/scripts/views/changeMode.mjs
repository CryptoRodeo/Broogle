import {elements} from './base.mjs';

/**
 * REFACTOR LATER TO USE THE ELEMENTS OBJECT INSTEAD OF
 * DOCUMENT SELECTORS
 */

 export const mainStylesApplied = () => {
     return elements.htmlDoc.classList.contains('--dark-mode') || elements.docBody.classList.contains('--dark-mode');
 }


 export const triggerStyles = () => {
    document.querySelectorAll('.info-container').forEach( el => {
        el.classList.toggle('--dark-mode') 
        el.classList.toggle('light')
    });
 }

 export const isDark = () => {
    if(mainStylesApplied())
    {
        return '--dark-mode';
    }
    else if(!mainStylesApplied())
    {
        return 'light';
    }
 }
export let alternateMode = () => {
    elements.changeMode.onclick = () => {
            elements.htmlDoc.classList.toggle('--dark-mode');
            elements.docBody.classList.toggle('--dark-mode');
            elements.searchResultList.classList.toggle('--dark-mode_results');
            elements.aboutContainer.classList.toggle('--dark-mode');
            elements.heart.classList.toggle('--dark-heart');
            elements.likedOverlay.classList.toggle('--dark-mode');
            elements.likedOverlay.classList.toggle('--force-dark');
            if(elements.likedOverlay.classList.contains('--force-dark'))
            {
                elements.likedOverlay.style.backgroundColor = '#2E3238';
            }
            else
            {
                elements.likedOverlay.style.backgroundColor='#fff';
            }
            triggerStyles();
        }
};