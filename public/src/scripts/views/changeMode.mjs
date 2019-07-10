import {elements} from './base.mjs';

export const alternateMode = () => {
    elements.changeMode.addEventListener('click', () => alert("Hello!"))
};