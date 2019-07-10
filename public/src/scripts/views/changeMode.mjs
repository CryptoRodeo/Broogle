import {elements} from './base.mjs';

/**
 * REFACTOR LATER TO USE THE ELEMENTS OBJECT INSTEAD OF
 * DOCUMENT SELECTORS
 */
export const alternateMode = () => {
    elements.changeMode.onclick = () => {
    elements.htmlDoc.classList.toggle('--dark-mode');
    elements.docBody.classList.toggle('--dark-mode');
    document.querySelectorAll('.info-container').forEach(el => {
        el.classList.toggle('light');
        el.classList.toggle('--dark-mode');
    });
    elements.searchResultList.classList.toggle('.--dark-mode_results_list');

    // if(document.querySelectorAll('.info-container')[1].classList.contains('light'))
    // {
    //     document.querySelectorAll('.info-container')[1].classList.remove('light');
    // }
    // document.querySelectorAll('.info-container')[1].classList.toggle('--dark-mode');
    // }
    }
};