import {elements} from './base.mjs';

export const alternateMode = () => {
    elements.changeMode.onclick = () => {
    elements.htmlDoc.classList.toggle('--dark-mode');
    elements.docBody.classList.toggle('--dark-mode');
    }
};