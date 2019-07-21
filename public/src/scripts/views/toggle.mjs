// Toggles the closing buttonß
import {elements} from './base.mjs';

export const toggleClosingButton = (isClosing) => {
    if(isClosing)
    {
        elements.configToggle.classList.add('far');
        elements.configToggle.classList.add('fa-times-circle');
    }
    else
    {
        elements.configToggle.classList.remove('far');
        elements.configToggle.classList.remove('fa-times-circle');
    }
}